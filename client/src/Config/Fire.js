import firebase from 'firebase'
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_APIKEY,
      authDomain: process.env.REACT_APP_AUTHDOMAIN,
      databaseURL: process.env.REACT_APP_DATABASEURL,
      projectId: process.env.REACT_APP_PROJECTID,
      storageBucket: process.env.REACT_APP_STORAGEBUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
      appId: process.env.REACT_APP_APPID
  };
console.log(process.env.AUTHDOMAIN);
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;
  export const authRef = firebase.auth();
  export const provider = new firebase.auth.GoogleAuthProvider();