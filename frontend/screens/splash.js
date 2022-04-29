import React from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
    StackNavigator,
    Linking
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS, SIZES, FONTS } from "../constants";

import axios from "axios";

// console.log("First")

// const data = new FormData()
// data.append('text', 'Contact rick(at)gmail(dot)com to have s_*_x');
// data.append('lang', 'en');
// data.append('opt_countries', 'us,gb,fr');
// data.append('mode', 'standard');
// data.append('api_user', '1229345789');
// data.append('api_secret', '6foKYakwvCGDHuk9dsms');

// console.log('Second')

// axios({
//   url: 'https://api.sightengine.com/1.0/text/check.json',
//   method:'post',
//   data: data,
//   headers: { "Content-Type": "multipart/form-data" } //{'text': 'Contact rick(at)gmail(dot)com to have s_*_x', 'lang': 'en', 'opt_countries': 'us,gb,fr', 'mode': 'standard', 'api_user': '1229345789', 'api_secret': '6foKYakwvCGDHuk9dsms'}     // ['text', 'lang', 'opt_countries', 'mode', 'api_user', 'api_secret']
// })
// .then(function (response) {
//   // on success: handle response
//   console.log(response.data);
// })
// .catch(function (error) {
//   // handle error
//   if (error.response) console.log(error.response.data);
//   else console.log(error.message);
// });

// console.log('Third')

// axios.get('https://api.sightengine.com/1.0/check.json', {
//   params: {
//     'url': 'https://sightengine.com/assets/img/examples/example7.jpg',
//     'models': 'nudity,wad,offensive,text-content,gore',
//     'api_user': '1229345789',
//     'api_secret': '6foKYakwvCGDHuk9dsms',
//   }
// })
// .then(function (response) {
//   // on success: handle response
//   console.log(response.data);
// })
// .catch(function (error) {
//   // handle error
//   if (error.response) console.log(error.response.data);
//   else console.log(error.message);
// });

// Functional component for splash page
const Splash = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <SafeAreaView>
                {/* Buttons */}
                <View style={styles.buttonsContainer}>
                    <Image source={require('../assets/images/deeperlogo.png')}
                            style={styles.deeperImage}
                    />
                    <TouchableOpacity style={styles.subutton}
                    onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.subuttonTitle}>
                            <Text>
                                Sign Up
                            </Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sibutton}
                    onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.sibuttonTitle}>
                            <Text>
                                Sign In
                            </Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
      },
      deeperImage: {
        alignSelf: 'center',
        width: Platform.OS === 'android' ? Dimensions.get("window").width/1.2 : Dimensions.get("screen").width/1.2,
        height: Platform.OS === 'android' ? Dimensions.get("window").width/1.2 : Dimensions.get("screen").width/1.2,
        top: 30,
        resizeMode: 'contain',
      },
      sibutton: {
        width: Dimensions.get("screen").width/1.3,
        height: Platform.OS === 'android' ? Dimensions.get("window").height/14 : Dimensions.get("screen").height/14,
        alignItems: 'stretch',
        borderRadius: 10,
        borderColor: '#432C81',
        borderWidth: 2,
        justifyContent: 'center',
        top: Platform.OS === 'android' ? Dimensions.get("window").height/35 : Dimensions.get("screen").height/35,
      },
      subutton: {
        width: Dimensions.get("screen").width/1.3,
        height: Platform.OS === 'android' ? Dimensions.get("window").height/14 : Dimensions.get("screen").height/14,
        alignItems: 'stretch',
        backgroundColor: '#432C81',
        borderRadius: 10,
        top: Platform.OS === 'android' ? (Dimensions.get("window").height/35)-10 : (Dimensions.get("screen").height/35)-10,
        marginVertical: 2,
        justifyContent: 'center',
      },
      sibuttonTitle: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: COLORS.primary,
        fontFamily: 'Avenir-Medium',
        fontSize: 15, 
      },
      subuttonTitle: {
        textAlignVertical: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: 'Avenir-Medium',
        fontSize: 15, 
      },
})