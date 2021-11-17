import React, { useState, useRef, useEffect, useContext } from "react";
import { View, Text, Image, ScrollView, TextInput, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform, TouchableOpacity, ActivityIndicator, Button, StyleSheet} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_Lifesavers___Bust_2_link} from './assets/imageLinks.js'

// Byron added code
import { StatusBar } from "expo-status-bar";
// icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
// formik 
import { Formik } from "formik";
import {
    Colors,
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledInputLabel,
    StyledTextInput,
    StyledButton,
    ButtonText,
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent

} from "../../styles/global";
// colors
const { brand, darkLight, primary } = Colors;
import KeyboardAvoidingWrapper from "../../styles/keyboardavoid";
// Google
import * as Google from 'expo-google-app-auth';
// authentication with firevbase
import auth from "../../firebase/config";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from '../../styles/CredentialContext';


const Page_Login_1  = ({navigation}) => {

	// Byron's Constants
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setmessageType] = useState();
    const [googleSubmitting, setGoogleSubmitting] = useState(false);
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

	const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setmessageType(type);
    }

    // Google Sign In 
    const handleGoogleSignIn = () => {

        setGoogleSubmitting(true);

        const config = {
            iosClientId: '986150548370-k9kc9u0mus6gfhig8u8be42g116lr2la.apps.googleusercontent.com',
            scopes: ['profile', 'email']
        };

        Google
            .logInAsync(config)
            .then((result) => {
                const { type, user } = result;

                if (type == 'success') {
                    const { email, name, photoUrl } = user;
                    persistLogin({ email, name, photoUrl }, 'Google signin successful', 'SUCCESS');
					navigation.navigate("Page_Onboarding___1");
                } else {
                    handleMessage('Google signin was cancelled.');
                }

                setGoogleSubmitting(false);
            })
            .catch(error => {
                console.log(error);
                handleMessage('An error occurred. Check your network and try again');
                setGoogleSubmitting(false);
            });
    }

    // to be kept logged in 
    const persistLogin = (credentials, message, status) => {
        AsyncStorage
            .setItem('ScanToKnowCredentials', JSON.stringify(credentials))
            .then(() => {
                handleMessage(message, status);
                setStoredCredentials(credentials);
            })
            .catch((error) => {
                console.log(error);
                handleMessage('Persisting Login failed');
            })
    }

	return (
		<KeyboardAvoidingWrapper>
			<StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <PageLogo resizeMode='cover' source={{uri: image_Lifesavers___Bust_2_link}} />
                    {/* <PageTitle> ScanToKnow </PageTitle> */}
                    <SubTitle>Account Login</SubTitle>

                    <Formik
                        initialValues={{ email: '', password: '' }}

                        onSubmit={(values) => {
                            auth.signInWithEmailAndPassword(values.email, values.password)
                                .then((userCredential) => {
                                    // Signed in 
                                    const user = userCredential.user;
                                    // navigation.navigate('Welcome');
                                    persistLogin(userCredential, message, 'SUCCESS');
									navigation.navigate("Page_Onboarding___1");
                                })
                                .catch((error) => {
                                    const errorCode = error.code;
                                    const errorMessage = error.message;
                                    console.log(errorCode, errorMessage);
                                    alert(
                                        errorMessage,
                                        'Please try again',
                                        [{
                                            text: 'Try Again',
                                            onPress: () => console.log('error message displayed')
                                        }]
                                    )
                                });
                        }}

                    >{({ handleChange, handleBlur, handleSubmit, values }) => (<StyledFormArea>

                        <MyTextInput
                            label="Email Address"
                            icon="mail"
                            autoCapitalize="none"
                            placeholder="john@doe.com"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"

                        />

                        <MyTextInput
                            label="Password"
                            icon="lock"
                            placeholder="* * * * * * * * *"
                            autoCapitalize="none"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />

                        <MsgBox type={messageType}>{message}</MsgBox>

                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Login</ButtonText>

                        </StyledButton>

                        <Line />

                        {!googleSubmitting && (
                            <StyledButton google={true} onPress={handleGoogleSignIn}>
                                <Fontisto name="google" color={primary} size={25} />
                                <ButtonText google={true}>Sign in with Google</ButtonText>
                            </StyledButton>
                        )}

                        {googleSubmitting && (
                            <StyledButton google={true} disable={true}>
                                <ActivityIndicator size="large" color={primary} />
                            </StyledButton>
                        )}

                        <ExtraView>
                            <ExtraText>Don't have an account already? </ExtraText>
                            <TextLink onPress={() => navigation.navigate("Page_Sign_Up")}>
                                <TextLinkContent>Signup</TextLinkContent>
                            </TextLink>

                        </ExtraView>

                    </StyledFormArea>)}
                    </Formik>
                </InnerContainer>
            </StyledContainer>

		</KeyboardAvoidingWrapper>
	);
}
export default Page_Login_1

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {

    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />

            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}

        </View>

    );
};

const noneModeStyles = StyleSheet.create({
_page18: {
	height: 812,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Title_Lines: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 0,
	top: 87,
	right: 0,
	paddingRight: 24,
	paddingLeft: 24,
	},
_Login: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(67, 44, 129)",
	fontSize: 32,
	fontWeight: "700",
	fontFamily: "Raleway",
	textAlign: "center",
	},
_Login_Data: {
	width: "auto",
	height: 535,
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 0,
	top: 160,
	right: 0,
	paddingRight: 24,
	paddingLeft: 24,
	},
_Lifesavers___Bust_2_container: {
	width: 176,
	height: 263,
	flexShrink: 0,
	marginBottom: 24,
	},
_Lifesavers___Bust_2: {
	width: "100%",
	height: "100%",
	},
_Login_Form: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	marginBottom: 24,
	},
_Email_Wrapper: {
		width: "100%",
		height: "auto",
		backgroundColor: "rgba(0, 0, 0, 0)",
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-end",
		justifyContent: "flex-end",
		flexShrink: 0,
	},
_Email_Text_Box: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	marginBottom: 8,
	paddingTop: 10,
	paddingRight: 20,
	paddingBottom: 10,
	paddingLeft: 20,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(237, 236, 244)",
	borderRadius: 8,
	},
_Placeholder___Right_Icon: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	},
_label: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	color: "rgb(123, 107, 168)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
_Password_Wrapper: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-end",
	justifyContent: "flex-end",
	flexShrink: 0,
	},
_Password_Text_Box: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	marginBottom: 8,
	paddingTop: 10,
	paddingRight: 20,
	paddingBottom: 10,
	paddingLeft: 20,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(237, 236, 244)",
	borderRadius: 8,
	},
_Placeholder___Right_Icon_2: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	},
_label_2: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	marginRight: 24,
	color: "rgb(123, 107, 168)",
	fontSize: 16,
	fontWeight: "500",
	fontFamily: "Raleway",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
_Icon_Eye: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(255, 255, 255, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_4e709d: {
	position: "absolute",
	},
_layer_37f1d2: {
	position: "absolute",
	transform: [
		{translateX: 1},
		{translateY: 4},
	],
	},
_layer_21ebd6: {
	},
_Forgot_Password_link: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(67, 44, 129)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "right",
	},
_Login_Button: {
	width: "100%",
	height: "auto",
	backgroundColor: "rgb(67, 44, 129)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	marginBottom: 24,
	paddingTop: 12,
	paddingRight: 24,
	paddingBottom: 12,
	paddingLeft: 24,
	borderRadius: 8,
	},
_label_3: {
	width: "auto",
	height: "auto",
	flexGrow: 1,
	flexBasis: 0,
	flexShrink: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 16,
	fontWeight: "600",
	fontFamily: "Raleway",
	textAlign: "center",
	},
_Bottom_Link: {
	width: "100%",
	height: "auto",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	},
_Don_t_have_an_account_: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginRight: 8,
	color: "rgb(130, 121, 157)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
_Sign_Up: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(67, 44, 129)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Raleway",
	textAlign: "left",
	},
})

