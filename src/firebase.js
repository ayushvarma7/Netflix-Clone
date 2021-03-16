import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAyEGVPHSKAhuyRmBuTE5fbU5eFtS8Vd5o",
    authDomain: "netflix-clone-f9ea0.firebaseapp.com",
    projectId: "netflix-clone-f9ea0",
    storageBucket: "netflix-clone-f9ea0.appspot.com",
    messagingSenderId: "55675019625",
    appId: "1:55675019625:web:e33456158e2eed9b241df8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth };  //this is an explicit export( no limit on number of explicit exports)
  export default db;