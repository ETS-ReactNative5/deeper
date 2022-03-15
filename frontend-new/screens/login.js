import React, { useState, useContext } from "react";

import { TouchableOpacity, Text, View, TextInput, Image, ActivityIndicator, Button, StyleSheet, Dimensions, Alert} from "react-native";

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

} from "../components/styles";

// colors
const { brand, darkLight, primary } = Colors;

import KeyboardAvoidingWrapper from "../components/keyboardavoid";

// // Google
import * as Google from 'expo-google-app-auth';

// // authentication with firevbase
// import auth from "../../firebase/config";
// import * as firebase from 'firebase';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { CredentialsContext } from "../components/CredentialContext";

const Login  = ({navigation}) => {

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
            androidClientId: '986150548370-epo8ecvrq6doqdrn52jnhu6915nfh29l.apps.googleusercontent.com',
            scopes: ['profile', 'email']
        };

        Google
            .logInAsync(config)
            .then((result) => {
                const { type, user } = result;

                if (type == 'success') {
                    const { email, name, photoUrl } = user;
                    persistLogin({ email, name, photoUrl }, 'Google signin successful', 'SUCCESS');
                    console.log(name)
					navigation.navigate("Page_Onboarding___1", {
                        text: 'byron',
                    });
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

    // const persistLogin = (credentials, message, status) => {
    //     AsyncStorage
    //         .setItem('ScanToKnowCredentials', JSON.stringify(credentials))
    //         .then(() => {
    //             handleMessage(message, status);
    //             setStoredCredentials(credentials);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             handleMessage('Persisting Login failed');
    //         })
    // }

	return (
		<KeyboardAvoidingWrapper>
			<StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>
                    <PageLogo resizeMode='cover' source={require('../assets/images/login.png')} />
                    {/* <PageTitle> DEEPER </PageTitle> */}
                    <SubTitle>Account Login</SubTitle>

                    <Formik
                        initialValues={{ email: '', password: '' }}

                        onSubmit={(values) => {
                            console.log(values);
                            // auth.signInWithEmailAndPassword(values.email, values.password)
                            //     .then(async (userCredential) => {
                            //         // Signed in 
                            //         const user = userCredential.user;
                            //         let doc = await firebase
                            //             .firestore()
                            //             .collection('users')
                            //             .doc(user.uid)
                            //             .get();
                            //         if (!doc.exists){
                            //             Alert.alert('No user data found!')
                            //         } else {
                            //             let dataObj = doc.data();
                            //             console.log(dataObj.name)
                            //             persistLogin(userCredential, message, 'SUCCESS');
                            //             navigation.navigate("Page_Onboarding___1", {
                            //                 name: 'byron'
                            //             });
                            //         }
                                    
                            //     })
                            //     .catch((error) => {
                            //         const errorCode = error.code;
                            //         const errorMessage = error.message;
                            //         console.log(errorCode, errorMessage);
                            //         alert(
                            //             errorMessage,
                            //             'Please try again',
                            //             [{
                            //                 text: 'Try Again',
                            //                 onPress: () => console.log('error message displayed')
                            //             }]
                            //         )
                            //     });
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
                            <TextLink onPress={() => navigation.navigate("Singup")}>
                                <TextLinkContent>Signup</TextLinkContent>
                            </TextLink>

                        </ExtraView>

                        <ExtraView>
                            <TextLink onPress={() => navigation.navigate("OnboardingScreen")}>
                                <TextLinkContent>SKIP</TextLinkContent>
                            </TextLink>

                        </ExtraView>

                    </StyledFormArea>)}
                    </Formik>
                </InnerContainer>
            </StyledContainer>

		</KeyboardAvoidingWrapper>
	);
}
export default Login

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