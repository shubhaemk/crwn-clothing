import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAFd3rqQvsD42tjpl31W-pUXMaUP09y7yM",
    authDomain: "crwn-db-f3260.firebaseapp.com",
    databaseURL: "https://crwn-db-f3260.firebaseio.com",
    projectId: "crwn-db-f3260",
    storageBucket: "crwn-db-f3260.appspot.com",
    messagingSenderId: "616872230878",
    appId: "1:616872230878:web:6b798044ab85d5113ce74f",
    measurementId: "G-ZV41JK3QKX"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth)
        return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log(`Error : ${error}`);
        }finally{
            
        }
    }

    return userRef;
} 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});
//this triggers select account pop up whenever provider is called

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
