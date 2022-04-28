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
import firebase from 'firebase/compat/app';
import 'firebase/firestore';

import { COLORS, SIZES, FONTS } from "../constants";
import Fire from '../Fire';
import { useIsFocused } from '@react-navigation/native';
//import { FlatList } from "../node_modules/react-native-gesture-handler/lib/typescript/index";
import { getAuth } from "firebase/auth";
import { QuerySnapshot } from "firebase/firestore";

// Functional component for inbox page
const Inbox = ({navigation}) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const [send, setSend] = useState();

    const [entry, setEntry] = useState(null);
    
    const chatFetch = async () => {
        const entry = [];
        const query = await Fire.shared.firestore.collection("chats").orderBy('createdAt', 'desc').get().then(QuerySnapshot => {
            if(!QuerySnapshot.empty){
                QuerySnapshot.forEach(doc => {
                    let data = doc.data();
                    let counter = 0;
                    if (data.user._id == user.email || (data.user._id != user.email && data.sendTo.toString().toLowerCase() == user.email)){
                      entry.push(doc.data());
                    }
                })
            }
        });
        // query.forEach(doc => entry.push(doc.data()));
        setEntry(entry);
        // console.log(entry);
    }
    const isFocused = useIsFocused();
    useEffect(() => {
        chatFetch();
    }, [isFocused]);

    let array1 = [];
    let array2 = [];
    let counter = 0; 
    renderEntry = entries => {
        /* if (array1.includes(entries.user._id.toLowerCase()) || array2.includes(entries.user._id.toLowerCase()))
        {
          return; 
        } */
        if (entries.createdAt && (entries.sendTo.toLowerCase() != user.email))
        {
          array1[counter] = entries.sendTo.toLowerCase();
          array2[counter] = entries.user._id.toLowerCase();
          counter++;
          return (
            <TouchableOpacity style={styles.feedItem} onPress={() => { global.sender = entries.sendTo.toString().toLowerCase(); navigation.navigate('SendInbox'); }}>
                <Text style={styles.entry}>{entries.sendTo.toString()}</Text>
                <Text style={styles.timestamp}>{entries.createdAt.toDate().toString()}</Text>
            </TouchableOpacity>
            )
        }
        else if (entries.sendTo.toLowerCase() != user.email)
        {
          array1[counter] = entries.sendTo.toLowerCase();
          array2[counter] = entries.user._id.toLowerCase();
          counter++;
          return (
            <TouchableOpacity style={styles.feedItem} onPress={() => {global.sender = entries.sendTo.toString().toLowerCase(); navigation.navigate('SendInbox');}}>
                <Text style={styles.entry}>{entries.sendTo.toString()}</Text>
            </TouchableOpacity>
            )
        }
        else if (entries.createdAt && (entries.sendTo.toLowerCase() == user.email))
        {
          array1[counter] = entries.sendTo.toLowerCase();
          array2[counter] = entries.user._id.toLowerCase();
          counter++;
          return (
            <TouchableOpacity style={styles.feedItem} onPress={() => { global.sender = entries.user._id.toString().toLowerCase(); navigation.navigate('SendInbox'); }}>
                <Text style={styles.entry}>{entries.user._id.toString().toLowerCase()}</Text>
                <Text style={styles.timestamp}>{entries.createdAt.toDate().toString()}</Text>
            </TouchableOpacity>
            )
        }
        else if (entries.sendTo.toLowerCase() == user.email)
        {
          array1[counter] = entries.sendTo.toLowerCase();
          array2[counter] = entries.user._id.toLowerCase();
          counter++;
          return (
            <TouchableOpacity style={styles.feedItem} onPress={() => {global.sender = entries.user._id.toString().toLowerCase(); navigation.navigate('SendInbox');}}>
                <Text style={styles.entry}>{entries.user._id.toString().toLowerCase()}</Text>
            </TouchableOpacity>
            )
        }
        else
        {
          return;
        }
    }

    const addUser = async () => {
      const query = await Fire.shared.firestore.collection("chats").orderBy('createdAt', 'desc').get().then(QuerySnapshot => {
      let bool = true; 
        if(!QuerySnapshot.empty){
            QuerySnapshot.forEach(doc => {
                let data = doc.data()
                if (data.user._id.toLowerCase() == user.email && data.sendTo.toLowerCase() == send.toLowerCase()){
                  bool = false; 
                }
            })
            if (bool)
            {
              firebase.firestore().collection('chats').add({
                _id: null,
                createdAt: new Date(),
                text: 'I started a conversation with you!',
                user: {
                  _id: user.email,
                  avatar: null,
                  name: user.displayName
                },
                sendTo: send
              })
            }
        }
      if (bool)
      {
        alert('Added a conversation with ' + send + '!');
      }
      else
      {
        alert('You already have a conversation with this user!');
      }
      });
    };

    return (
        <View style={StyleSheet.container}>
            <SafeAreaView>
                <ScrollView>
                    {/* Header */}
                    <View style={styles.headerWrapper}>
                        <Text style={styles.headerTitle}>
                            <Text>
                                Inbox
                            </Text>
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
                            <Image source={require('../assets/icons/list.png')}
                            style={styles.list}
                            />
                        </TouchableOpacity>
                    </View>
                    {/* Search Bar */}
                    <View style={styles.searchWrapper}>
                        <Image source={require('../assets/icons/search.png')}
                        style={styles.searchIcon}
                        />
                        <View style={styles.search}>
                            <TextInput 
                                style={styles.searchText}
                                placeholder="Search"
                                onChangeText={setSend}
                                value={send}
                                />
                        </View>
                    </View>
                    {/* Messages */}
                    <View style={styles.messagesWrapper}>
                      <FlatList
                        style={styles.feed}
                        data={entry}
                        renderItem={({ item }) => this.renderEntry(item)}
                        keyExtractor={item => item.id}
                      ></FlatList>
                    </View>
                </ScrollView>
                {/* Buttons */}
                <TouchableOpacity style={styles.addButton} onPress={addUser}>
                    <Text style={styles.addTitle}>
                        <Text>
                            +
                        </Text>
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

export default Inbox; 

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
      headerTitle: {
        color: COLORS.primary,
        fontFamily: 'Avenir-Medium',
        fontSize: 30,
        top: 6,
      },
      list: {
        top: 5,
        width: 33,
        height: 33,
      },
      searchWrapper:
      {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get("window").width-40,
        height: Dimensions.get("window").height/20,
        marginVertical: 15,
        marginHorizontal: 20,
        backgroundColor: '#EAE9E9',
        top: 5,
        borderRadius: 10,
      },
      searchIcon: {
        width: 25,
        height: 25,
        borderRadius: 20,
        left: 10,
      },
      search:
      {
        flex: 1,
        marginLeft: 15,
      },
      searchText:
      {
        fontFamily: 'Arial',
        fontSize: 16,
        color: '#747480',
      },
      messagesWrapper:
      {
        height: Dimensions.get("window").height/1.48,
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
        fontSize: 40,
        bottom: 0, 
        alignSelf: 'center',
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