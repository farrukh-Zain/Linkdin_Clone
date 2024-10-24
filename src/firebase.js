// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDw6ekDX5eMeIH4YYfV4ZQHm3GIgDU_oFA",
    authDomain: "linkdin-clone-yt-a3e1a.firebaseapp.com",
    projectId: "linkdin-clone-yt-a3e1a",
    storageBucket: "linkdin-clone-yt-a3e1a.appspot.com",
    messagingSenderId: "116075597625",
    appId: "1:116075597625:web:5d9b0a6c0dce6229f622e8"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
