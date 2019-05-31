import firebase from 'firebase'
    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAMgYAAOR4l11Q1_YNLd5G3KYS7wXF76LY",
        authDomain: "moneymanager-fca62.firebaseapp.com",
        databaseURL: "https://moneymanager-fca62.firebaseio.com",
        projectId: "moneymanager-fca62",
        storageBucket: "moneymanager-fca62.appspot.com",
        messagingSenderId: "1005690093997",
        appId: "1:1005690093997:web:01f186f4f9eb2627"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;