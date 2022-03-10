import React, { useState, useEffect } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    ScrollView,
    Platform,
    Keyboard,
    KeyboardAvoidingView
} from "react-native";

import { COLORS, SIZES, FONTS } from "../constants";

const SignUp = ({navigation}) => {
    const [passwordVisible, setPasswordVisible] = useState(true);

    return (
        <View style={StyleSheet.container}>
            <SafeAreaView>
                <KeyboardAwareScrollView
                    onKeyboardWillShow={(frames: Object) => {
                    console.log('Keyboard event', frames)
                    }}>
                {/* Header */}
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/icons/back.png')}
                        style={styles.back}
                        />
                    </TouchableOpacity>
                </View>
                {/* Sign-In Logo and Image */}
                <Text style={styles.headerTitle}>
                        <Text>
                            Sign Up
                        </Text>
                    </Text>
                    <Image source={require('../assets/images/login.png')}
                            style={styles.logoImage}
                    />
                    {/* Sign-In Functionality */}
                    <View style={styles.signinWrapper}>
                        <View style={styles.nameWrapper}>
                            <View style={styles.name}>
                                <TextInput 
                                    style={styles.nameText}
                                    placeholder="First Name"
                                    placeholderTextColor="#A095C1" />
                            </View>
                            <View style={styles.name}>
                                <TextInput 
                                    style={styles.nameText}
                                    placeholder="Last Name"
                                    placeholderTextColor="#A095C1" />
                            </View>
                        </View>
                        <View style={styles.usernameWrapper}>
                            <View style={styles.username}>
                                <TextInput 
                                    style={styles.usernameText}
                                    placeholder="Email"
                                    placeholderTextColor="#A095C1" />
                            </View>
                        </View>
                        <View style={styles.passwordWrapper}>
                            <View style={styles.password}>
                                <TextInput 
                                    style={styles.passwordText}
                                    placeholder="Password"
                                    placeholderTextColor="#A095C1"
                                    secureTextEntry={passwordVisible}
                                />
                            </View>
                            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                                <Image source={passwordVisible ? require('../assets/icons/passwordon.png') : require('../assets/icons/passwordoff.png')}
                                style={styles.passwordIcon}
                                /> 
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.buttonWrapper}
                        onPress={() => navigation.navigate('OnboardingScreen')}>
                            <Text style={styles.buttonTitle}>
                                <Text>
                                    Sign Up
                                </Text>
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.signupWrapper}>
                            <Text style={styles.signuptext}>
                                <Text>
                                    Already have an account?
                                </Text>
                            </Text>
                            <TouchableOpacity
                            onPress={() => navigation.navigate('SignIn')}>
                                <Text style={styles.signupnav}>
                                    <Text>
                                        Sign In
                                    </Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      headerWrapper: {
        flexDirection: 'row',
        alignItems: 'stretch',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? 50 : 15,
      },
      back: {
        top: 5,
        width: 30,
        height: 30,
      },
      headerTitle: {
        textAlign: 'center',
        color: COLORS.primary,
        fontFamily: 'Avenir-Heavy',
        fontSize: Platform.OS === 'android' ? Dimensions.get("window").height/25 : Dimensions.get("screen").height/25,
        top: Platform.OS === 'android' ? Dimensions.get("window").height/28 : Dimensions.get("screen").height/28,
      },
      logoImage: {
        alignSelf: 'center',
        width: Platform.OS === 'android' ? Dimensions.get("window").width/1.8 : Dimensions.get("screen").width/1.8,
        height: Platform.OS === 'android' ? Dimensions.get("window").width/1.8 : Dimensions.get("screen").width/1.8,
        top: Platform.OS === 'android' ? Dimensions.get("window").height/18 : Dimensions.get("screen").height/18,
        resizeMode: 'contain',
      },
      signinWrapper:
      {
        height: Platform.OS === 'android' ? Dimensions.get("window").height/2 : Dimensions.get("screen").height/2,
      },
      nameWrapper:
      {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get("window").width-40,
        height: Dimensions.get("window").height/15,
        marginHorizontal: 20,
        borderColor: '#EAE9E9',
        borderWidth: 2,
        top: Dimensions.get("window").height/13,
        borderRadius: 10,
      },
      name:
      {
        flex: 1,
        marginLeft: 15,
      },
      nameText:
      {
        fontFamily: 'Arial',
        fontSize: 16,
        color: '#7B6BA8',
      },
      usernameWrapper:
      {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get("window").width-40,
        height: Dimensions.get("window").height/15,
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#EAE9E9',
        borderWidth: 2,
        top: Dimensions.get("window").height/13,
        borderRadius: 10,
      },
      username:
      {
        flex: 1,
        marginLeft: 15,
      },
      usernameText:
      {
        fontFamily: 'Arial',
        fontSize: 16,
        color: '#7B6BA8',
      },
      passwordWrapper:
      {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get("window").width-40,
        height: Dimensions.get("window").height/15,
        marginHorizontal: 20,
        borderColor: '#EAE9E9',
        borderWidth: 2,
        top: Dimensions.get("window").height/13,
        borderRadius: 10,
      },
      passwordIcon: {
        width: 25,
        height: 25,
        borderRadius: 20,
        right: 10,
        tintColor: '#7B6BA8'
      },
      password:
      {
        flex: 1,
        marginLeft: 15,
      },
      passwordText:
      {
        fontFamily: 'Arial',
        fontSize: 16,
        color: '#7B6BA8',
      },
      buttonWrapper:
      {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get("window").width-40,
        height: Dimensions.get("window").height/15,
        marginHorizontal: 20,
        backgroundColor: '#432C81',
        borderColor: '#432C81',
        borderWidth: 2,
        top: (Dimensions.get("window").height/9),
        borderRadius: 10,
      },
      buttonTitle:
      {
        fontFamily: 'Arial',
        fontSize: 16,
        color: 'white',
      },
      signupWrapper:
      {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get("window").width-40,
        height: Dimensions.get("window").height/12,
        marginHorizontal: 20,
        top: Dimensions.get("window").height/8.8,
        borderRadius: 10,
      },
      signuptext:
      {
        fontFamily: 'Arial',
        fontSize: 16,
        color: '#A095C1',
        right: 3,
      },
      signupnav:
      {
        fontFamily: 'Arial',
        fontSize: 16,
        color: '#432C81',
        left: 3,
      },
})