import firebase from 'firebase'
import configKeys from './APIKeys'
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: configKeys.apiKey,
        authDomain: configKeys.authDomain,
        databaseURL: configKeys.databaseURL,
        projectId: configKeys.projectId,
        storageBucket: configKeys.storageBucket,
        messagingSenderId: configKeys.messagingSenderId,
        appId: configKeys.appId
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;