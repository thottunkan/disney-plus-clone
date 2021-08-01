import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCBIopTIe9Rsu7Pai-052ODmrV1ahwGEbw",
    authDomain: "disneyplus-clone-ba10e.firebaseapp.com",
    projectId: "disneyplus-clone-ba10e",
    storageBucket: "disneyplus-clone-ba10e.appspot.com",
    messagingSenderId: "410992760496",
    appId: "1:410992760496:web:bd99cb9476af3d2107cd75",
    measurementId: "G-6VVMTFC866"


  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  const analytics = firebase.analytics();

  export {auth,provider,storage};
  export default db;
  
