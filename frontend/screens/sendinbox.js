import React, { useCallback, useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import { collection, addDoc, getFirestore, query, onSnapshot, orderBy } from "firebase/firestore"; 

// Functional component for inbox page
const SendInbox = ({navigation}) => {
    const [messages, setMessages] = useState([]);
    const auth = getAuth();
    const user = auth.currentUser;
    const app = firebase.app();
    const db = getFirestore(app, {experimentalForceLongPolling: true});

    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: true }, {
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <Avatar
                        rounded
                        source={{
                            uri: auth?.currentUser?.photoURL,
                        }}
                    />
                </View>
            ),
            headerRight: () => (
                <TouchableOpacity style={{
                    marginRight: 10
                }}
                    onPress={navigation.goBack()}
                >
                    <Text>logout</Text>
                </TouchableOpacity>
            )
        })
        
        const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => 

        setMessages(
            snapshot.docs.map(doc => (
            ((user.email == doc.data().user._id && global.sender == doc.data().sendTo) || ((user.email == doc.data().sendTo) &&  global.sender == doc.data().user._id)) ?
            {
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
                sendTo: doc.data().sendTo,
            } :
            [
            ]
            ))
        ));

        return () => {
        unsubscribe();
        };

    }, [navigation]);

    const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const { _id, createdAt, text, user, sendTo} = messages[0]

    addDoc(collection(db, 'chats'), { _id, createdAt,  text, user, sendTo: global.sender});
    }, []);
    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                name: auth?.currentUser?.displayName,
                avatar: auth?.currentUser?.photoURL
            }}
        >
        {/* Header */}
        </GiftedChat>
    );
}

export default SendInbox; 