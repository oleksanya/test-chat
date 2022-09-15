import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAveBljOf-3PXy8_BXeYtXvEC3GIruwatM",
    authDomain: "chat-app-f41e1.firebaseapp.com",
    projectId: "chat-app-f41e1",
    storageBucket: "chat-app-f41e1.appspot.com",
    messagingSenderId: "503517607613",
    appId: "1:503517607613:web:0f4043b77a2db2d1b2a9d4",
    measurementId: "G-2F0FYXMGP4",
    databaseURL: "https://chat-app-f41e1-default-rtdb.europe-west1.firebasedatabase.app/" ,
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
