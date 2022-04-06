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
import { getAuth } from "firebase/auth";
import { COLORS, SIZES, FONTS } from "../constants";

// Functional component for home page
const Home = ({navigation}) => {
    const auth = getAuth();
    const user = auth.currentUser;

    return (
        <View style={StyleSheet.container}>
            <SafeAreaView>
                {/* Header */}
                <View style={styles.headerWrapper}>
                    <Text style={styles.headerTitle}>
                        <Text>
                            Hi, {user.displayName}!
                        </Text>
                    </Text>
                    <TouchableOpacity>
                        <Image source={require('../assets/images/profile.png')}
                        style={styles.profileImage}
                        />
                    </TouchableOpacity>
                </View>
                {/* Buttons */}
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('DailyCheckUp')}>
                        <Text style={styles.buttonTitle}>
                            <Text>
                                Daily Check-Up
                            </Text>
                        </Text>
                        <Image source={require('../assets/images/checkup.png')}
                            style={styles.buttonImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                    onPress={() => navigation.navigate('HealthIndex')}>
                        <Text style={styles.buttonTitle}>
                            <Text>
                                Health Index
                            </Text>
                        </Text>
                        <Image source={require('../assets/images/index.png')}
                            style={styles.buttonImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonTitle}>
                            <Text>
                                Mediation
                            </Text>
                        </Text>
                        <Image source={require('../assets/images/mediation.png')}
                            style={styles.buttonImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                    onPress={() => Linking.openURL('https://checkpoint.carrd.co/')}>
                        <Text style={styles.buttonTitle}>
                            <Text>
                                Resources
                            </Text>
                        </Text>
                        <Image source={require('../assets/images/resources.png')}
                            style={styles.buttonImage}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: Platform.OS === 'android' ? 50 : 15,
        alignItems: 'center',
      },
      profileImage: {
        width: 55,
        height: 55,
        borderRadius: 20,
      },
      headerTitle: {
        color: COLORS.primary,
        fontFamily: 'Avenir-Medium',
        fontSize: 30,
      },
      buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
      },
      button: {
        width: Dimensions.get("screen").width/1.08,
        height: Platform.OS === 'android' ? Dimensions.get("window").height/5.4 : Dimensions.get("screen").height/5.4,
        alignItems: 'stretch',
        backgroundColor: '#E2E0E9',
        padding: 30,
        borderRadius: 25,
        borderColor: '#EFEFEF',
        borderWidth: 5,
        justifyContent: 'center',
      },
      buttonTitle: {
        textAlign: 'left',
        justifyContent: 'center',
        alignItems: 'center',
        top: 40,
        right: 5,
        color: COLORS.primary,
        fontFamily: 'Avenir-Medium',
        fontSize: 22,
      },
      buttonImage: {
        alignSelf: 'flex-end',
        left: 20,
        bottom: 15,
        width: 80,
        height: 80,
      },
})