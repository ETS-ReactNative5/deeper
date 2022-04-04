import React, { useState, useEffect } from "react";
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
    FlatList
} from "react-native";

import { COLORS, SIZES, FONTS } from "../constants";
import Fire from '../Fire';
import { useIsFocused } from '@react-navigation/native';
//import { FlatList } from "../node_modules/react-native-gesture-handler/lib/typescript/index";




const Entries = ({ navigation }) => {
    const [entry, setEntry] = useState();
    const journalFetch = async () => {
        const query = await Fire.shared.firestore.collection("journal").orderBy('date', 'desc').get();
        const entry = [];
        query.forEach(doc => entry.push(doc.data()));
        setEntry(entry);
        console.log(entry);
    }
    const isFocused = useIsFocused();
    useEffect(() => {
        journalFetch();
    }, [isFocused]);

    renderEntry = entries => {
        return (
            <View style={styles.feedItem}>
                <Text style={styles.entry}>{entries.content}</Text>
                <Text style={styles.timestamp}>{entries.date}</Text>
            </View>

            )
    }
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
                            Past Entries
                        </Text>
                    </Text>
                    <Image source={require('../assets/images/journal.png')}
                        style={styles.buttonImage}
                    />
                </View>
              </View>
                {/* Entries */}
                <ScrollView>
                <View style={styles.questionsWrapper}>
                    <FlatList
                        style={styles.feed}
                        data={entry}
                        renderItem={({ item }) => this.renderEntry(item)}
                        keyExtractor={item => item.id}
                        ></FlatList>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Entries;

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
        justifyContent: 'center',
        height: Dimensions.get("window").height/1.3,
        alignItems: 'center',
        width: '100%',
        borderRadius: 15,
        backgroundColor: '#E2E0E9',
        padding: 10,
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    timestamp: {
        fontSize: 11,
        color: "#C4C6CE",
        marginTop: 4
    },
    entry: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899"
    },
    feed: {
        marginHorizontal: 16
    },
    questionsWrapper:
    {
        height: Dimensions.get("window").height / 1.48,
    }
})