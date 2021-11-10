import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCdQ2LD5STGa4WptXyfv6EdFkKiujNaFCE',

  authDomain: 'main-crwn-db.firebaseapp.com',

  projectId: 'main-crwn-db',

  storageBucket: 'main-crwn-db.appspot.com',

  messagingSenderId: '268268992357',

  appId: '1:268268992357:web:8f6eaeb760ec01d76d538c',

  measurementId: 'G-B8R0BKX3QK',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
