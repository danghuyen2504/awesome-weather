import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCVo-wP-UiXdNMOj3Dz0dIi8b3HEMokqco",
    authDomain: "awesomeweather-3a731.firebaseapp.com",
    databaseURL: "https://awesomeweather-3a731.firebaseio.com",
    projectId: "awesomeweather-3a731",
    storageBucket: "awesomeweather-3a731.appspot.com",
    messagingSenderId: "752348687127"
};
export const firebaseApp = firebase.initializeApp(config);