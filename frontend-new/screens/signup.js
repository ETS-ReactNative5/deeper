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
    PageLogo1,
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

const Signup  = ({navigation}) => {

	// Byron's Constants
    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState();
    const [messageType, setmessageType] = useState();
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

	const handleMessage = (message, type = 'FAILED') => {
        setMessage(message);
        setmessageType(type);
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
                    {/* <PageTitle> Account Signup </PageTitle> */}
                    <PageLogo1 resizeMode='cover' source={require('../assets/images/deeperlogo.png')} />
                    <SubTitle>Account Signup</SubTitle>

                    <Formik
                        initialValues={{email: '', password: '',confirm: '', firstName: '', lastName: ''}}

                        onSubmit ={ (values) => {
                            
                            if (!values.firstName) {
                                Alert.alert('Name is required');
                            } else if (!values.email) {
                                Alert.alert('Email field is required.');
                            } else if (!values.password) {
                                Alert.alert('Password field is required.');
                            } else if (!values.confirm) {
                                Alert.alert('Confirm password field is required.');
                            } else if (values.password !== values.confirm) {
                                Alert.alert('Password does not match!');
                            } else {
                                auth.createUserWithEmailAndPassword(values.email, values.password)
                                .then( (userCredential) => {
                                    // Signed in 
                                    const user = userCredential.user;
                                    // console.log(user);
                                    persistLogin(userCredential, message, 'SUCCESS');
                                    const db = firebase.firestore();
                                    db.collection('users')
                                        .doc(user.uid)
                                        .set({
                                            email: values.email,
                                            name: values.firstName,
                                            // lastName: values.lastName,
                                        });
                                    navigation.navigate("Page_Login_1")
                                })
                                .catch( (error) => {
                                    const errorCode = error.code;
                                    const errorMessage = error.message;
                                    console.log(errorCode, errorMessage);
                                    Alert.alert(
                                        errorMessage,
                                        'Please try again',
                                        [{
                                            text: 'Try Again',
                                            onPress: () => console.log('error message displayed')
                                        }]
                                    )
                                    // ..
                                });
                            }
                        }}

                    >{({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea> 

                        <MyTextInput 
                            label="Name" 
                            icon="person"
                            autoCapitalize="none"
                            placeholder="John Doe"
                            placeholderTextColor={darkLight}
                            onChangeText = {handleChange('firstName')}
                            onBlur={handleBlur('firstName')}
                            value={values.firstName}
                            keyboardType="default"
                        /> 

                        <MyTextInput 
                            label="Email Address" 
                            icon="mail"
                            autoCapitalize="none"
                            placeholder="john@doe.com"
                            placeholderTextColor={darkLight}
                            onChangeText = {handleChange('email')}
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
                            onChangeText = {handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />

                        <MyTextInput 
                            label="Confirm Password" 
                            icon="lock"
                            placeholder="* * * * * * * * *"
                            autoCapitalize="none"
                            placeholderTextColor={darkLight}
                            onChangeText = {handleChange('confirm')}
                            onBlur={handleBlur('confirm')}
                            value={values.confirm}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />

                        <MsgBox type={messageType}>{message}</MsgBox>

                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Register</ButtonText>
                        </StyledButton>

                        <Line />

                        <ExtraView>
                            <ExtraText>Already have an account? </ExtraText>
                            <TextLink onPress={() => navigation.navigate('Page_Login_1')}>
                                <TextLinkContent>Login</TextLinkContent>
                            </TextLink>

                        </ExtraView>

                    </StyledFormArea>)}
                    </Formik>
                </InnerContainer>
            </StyledContainer>

		</KeyboardAvoidingWrapper>
	);
}
export default Signup

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