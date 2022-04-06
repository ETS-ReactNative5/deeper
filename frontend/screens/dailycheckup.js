import React from "react";
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
    Platform
} from "react-native";

import { COLORS, SIZES, FONTS } from "../constants";

const DailyCheckUp = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <SafeAreaView>
              {/* Header */}
              <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/icons/back.png')}
                    style={styles.back}
                    />
                </TouchableOpacity>
              </View>
              {/* Logo */}
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Text style={styles.buttonTitle}>
                        <Text>
                            Daily Check-Up
                        </Text>
                    </Text>
                    <Image source={require('../assets/images/checkup.png')}
                        style={styles.buttonImage}
                    />
                </View>
              </View>
              {/* Buttons */}
              <View style={styles.buttonsContainer}>
                <View style={styles.surveyButton}>
                  <Text style={styles.surveyTitle}>
                    How are you feeling today?
                  </Text>
                  {/* Survey choices */}
                  <View style={styles.smiley}>
                    <TouchableOpacity>
                      <Image source={require('../assets/icons/lowest.png')}
                        style={styles.lowest}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image source={require('../assets/icons/low.png')}
                        style={styles.low}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image source={require('../assets/icons/mid.png')}
                        style={styles.mid}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image source={require('../assets/icons/high.png')}
                        style={styles.high}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Image source={require('../assets/icons/highest.png')}
                        style={styles.highest}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity style={styles.buttons}>
                  <Text style={styles.buttonsTitle}>
                    Take a survey
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons}
                onPress={() => navigation.navigate('Home', {screen: 'Journal'})}>
                  <Text style={styles.buttonsTitle}>
                    Write a journal entry
                  </Text>
                </TouchableOpacity>
              </View>
            </SafeAreaView>
        </View>
    )
}

export default DailyCheckUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? 50 : 15,
        alignItems: 'center',
      },
      back: {
        top: 5,
        width: 30,
        height: 30,
      },
      buttonContainer: {
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
      buttonsContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#E2E0E9',
      },
      surveyButton: {
        width: Dimensions.get("screen").width/1.08,
        height: Platform.OS === 'android' ? Dimensions.get("window").height/3.7 : Dimensions.get("screen").height/3.7,
        alignItems: 'stretch',
        backgroundColor: '#EFEFEF',
        borderRadius: 25,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        marginVertical: 6,
      },
      surveyTitle: {
        textAlign: 'left',
        justifyContent: 'center',
        alignItems: 'center',
        color: COLORS.primary,
        fontFamily: 'Avenir-Light',
        fontSize: 20,
        left: 20,
        bottom: 10
      },
      smiley: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        top: 5,
        paddingHorizontal: 15,
      },
      lowest: {
        width: 60,
        height: 60,
        tintColor: '#8ce2ee',
      },
      low: {
        width: 60,
        height: 60,
        tintColor: '#93bae1',
      },
      mid: {
        width: 60,
        height: 60,
        tintColor: '#8984d6',
      },
      high: {
        width: 60,
        height: 60,
        tintColor: '#7251b2',
      },
      highest: {
        width: 60,
        height: 60,
        tintColor: '#642e7c',
      },
      buttons: {
        width: Dimensions.get("screen").width/1.08,
        height: Platform.OS === 'android' ? Dimensions.get("window").height/6.5 : Dimensions.get("screen").height/6.5,
        alignItems: 'stretch',
        backgroundColor: '#EFEFEF',
        borderRadius: 25,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        marginVertical: 6,
      },
      buttonsTitle: {
        textAlign: 'left',
        justifyContent: 'center',
        alignItems: 'center',
        color: COLORS.primary,
        fontFamily: 'Avenir-Light',
        fontSize: 20,
        left: 20,
      },
})