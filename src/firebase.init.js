// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHwOBNGaXLlaFdQC1xDZ3R4wfmD5pz7cA",
    authDomain: "warehouse-management-486e0.firebaseapp.com",
    projectId: "warehouse-management-486e0",
    storageBucket: "warehouse-management-486e0.appspot.com",
    messagingSenderId: "798676273860",
    appId: "1:798676273860:web:3c0bb2b0f7adb1d9de9791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;