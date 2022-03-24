import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import {Alert} from 'react-native';

export function submitJournal(content, data) {
    try {
        firebase.firestore().collection('journal').add({
            content: content,
            date: date
        })

    } catch (err) {
        Alert.alert('There is something wrong!', err.messsage);
    }

}