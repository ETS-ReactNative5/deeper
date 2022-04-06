import FirebaseKeys from "../config";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

class Fire {
    constructor() {
        firebase.initializeApp(FirebaseKeys);
    }

    addPost = async ({ text }) => {

        return new Promise((res, rej) => {
            this.firestore
                .collection("comments")
                .add({
                    text,
                    //uid: this.uid,
                    timestamp: this.timestamp,
                    id: this.id
                    //image: remoteUri
                })
                .then(ref => {
                    res(ref);
                })
                .catch(error => {
                    rej(error);
                });
        });
    };

    get firestore() {
        return firebase.firestore();
    }

    get uid() {
        //return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return Date.now();
    }
}

Fire.shared = new Fire();
export default Fire;
