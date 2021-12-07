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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // user kolleksiyonunun içerisindeki gelen id' ye ait referansını alıyoruz
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // Bu referansa ait objenin veya kullanıcının bilgilerini çağırıyoruz.
  const snapShot = await userRef.get();

  // Bu kullanıcının veritabanımızda var olup olmadığını kontrol ediyoruz. Eğer yok ise set ile yenisini oluşturuyoruz.
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // parametre ile cen collectionKey adında referans oluşturuyoruz.
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  // ikinci parametre olarak gelen objectsToAdd objesini döngüye sokup içerisindeki her bir eleman için uniq keyli document oluşturuyoruz.
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
