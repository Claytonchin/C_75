import * as firebase from 'firebase'
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDb9OhNvWNKYRin-sfajuK8v3snDlVCuwM",
    authDomain: "wireless-library-app-2f95d.firebaseapp.com",
    databaseURL: "https://willy-app-2f95d.firebaseio.com",
    projectId: "wireless-library-app-2f95d",
    storageBucket: "wireless-library-app-2f95d.appspot.com",
    messagingSenderId: "654688005405",
    appId: "1:654688005405:web:285c99271d00f0718805f4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();