import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCPFZcw7whu7N-0SODOQ45gbRzH9KXUUfM',
    authDomain: 'social-network-f7d2f.firebaseapp.com',
    projectId: 'social-network-f7d2f',
    storageBucket: 'social-network-f7d2f.appspot.com',
    messagingSenderId: '344447852249',
    appId: '1:344447852249:web:d3a743acacb07bb3ed28c8',
    measurementId: 'G-YFFB67D2VB',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
