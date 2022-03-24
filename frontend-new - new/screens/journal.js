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
    Keyboard,
    KeyboardAvoidingView,
    Platform
} from "react-native";

import { COLORS, SIZES, FONTS } from "../constants";

// Functional component for journal page
const Journal = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            <SafeAreaView>
                {/* Header */}
                <View style={styles.headerWrapper}>
                    <Text style={styles.headerTitle}>
                        <Text>
                            Journal
                        </Text>
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Entries')}>
                        <Image source={require('../assets/icons/list.png')}
                        style={styles.list}
                        />
                    </TouchableOpacity>
                </View>
                {/* Journal entry */}
                <TouchableOpacity 
                    style={styles.entryWrapper}
                    activeOpacity={1}
                    onPress={() => Keyboard.dismiss()}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <KeyboardAvoidingView style={{ flex: 1 }}
                                keyboardVerticalOffset={120}
                                behavior={"position"}>
                                <View style={styles.entry}>
                                    <TextInput 
                                        multiline
                                        style={styles.entryText}
                                        placeholder="Start writing here..." />
                                </View>
                            </KeyboardAvoidingView>
                        </ScrollView>
                    </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

export default Journal; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: Platform.OS === 'android' ? 50 : 20,
        alignItems: 'center',
      },
      list: {
        width: 33,
        height: 33,
      },
      headerTitle: {
        color: COLORS.primary,
        fontFamily: 'Avenir-Medium',
        fontSize: 30,
      },
      entryWrapper:
      {
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: Dimensions.get("window").height/1.4,
        marginVertical: 15,
        marginHorizontal: 20,
        backgroundColor: '#EAE9E9',
        top: 0,
        borderRadius: 10,
      },
      entry:
      {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
      },
      entryText:
      {
        marginVertical: 20,
        fontFamily: 'Arial',
        fontSize: 18,
        color: '#747480',
      },
      addTitle:
      {
        fontFamily: 'Avenir',
        fontSize: 40,
        bottom: 0, 
        alignSelf: 'center',
      },
})