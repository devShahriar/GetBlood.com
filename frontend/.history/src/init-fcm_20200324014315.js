
import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBchaG-RefLhTHt4zYLAnJh6Lo2ceqUMKo",
    authDomain: "push-a9ccc.firebaseapp.com",
    databaseURL: "https://push-a9ccc.firebaseio.com",
    projectId: "push-a9ccc",
    storageBucket: "push-a9ccc.appspot.com",
    messagingSenderId: "441059445115",
    appId: "1:441059445115:web:5de503bf933eb6833295de"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey("BG1ADrSkecmEUxszVCuTHJO9DpPK0EZoeg3Nh5tfIIFDIeznVMHUsMzt_jqYBMP14uOTTBbdj4g-pXtjn-O39G4")
export { messaging };