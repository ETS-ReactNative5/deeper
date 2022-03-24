import React, { useState } from "react";
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

import { submitJournal } from '../API/firebaseMethods'
import { COLORS, SIZES, FONTS } from "../constants";

// Functional component for journal page
const Journal = ({ navigation }) => {
    const [state, setState] = useState({
        journalEntry: '',
    });
    
    
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
                                    value={state.journalEntry}
                                    onChangeText={(text) => setState({ journalEntry: text })}
                                    style={styles.entryText}
                                    placeholder="Start writing here..." />
                                </View>
                            </KeyboardAvoidingView>
                        </ScrollView>
                </TouchableOpacity>
                {/* Buttons */}
                <TouchableOpacity style={styles.addButton}
                    onPress={() => submitJournal(state.journalEntry, Date())}>
                    <Text style={styles.addTitle}>
                        <Text>
                            Save
                        </Text>
                    </Text>
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
      addButton:
      {
        width: 60,
        height: 60,
        backgroundColor: '#FEC62F',
        borderRadius: 100,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      addTitle:
      {
        fontFamily: 'Avenir',
        fontSize: 25,
        bottom: 0, 
        alignSelf: 'center',
      },
})