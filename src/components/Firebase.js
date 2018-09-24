import Firebase from 'firebase' ;
let database;

export const init = () => {
  let config = {
    apiKey: "AIzaSyCUGg87XXaU1q1Te11PnJOCRQSB9Dk7SeE",
    authDomain: "coping-app.firebaseapp.com",
    databaseURL: "https://coping-app.firebaseio.com",
    projectId: "coping-app",
    storageBucket: "coping-app.appspot.com",
    messagingSenderId: "409114255555"
  };
  }
    
  firebase.initializeApp(config);
  database = firebase.database();

  export default Firebase; 