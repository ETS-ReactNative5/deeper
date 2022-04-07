import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import {Alert} from 'react-native';

export function submitJournal(content, date, email) {
    try {
        firebase.firestore().collection('journal').add({
            content: content,
            date: date,
            email: email
        })
        Alert.alert("Your journal entry has been successfully saved!");
    } catch (err) {
        Alert.alert('There is something wrong!', err.message);
    }

}