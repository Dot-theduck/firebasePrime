// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpoBlHOptaBNTe2mCeGCxduyA56oYzats",
    authDomain: "team-iv-1d65a.firebaseapp.com",
    projectId: "team-iv-1d65a",
    storageBucket: "team-iv-1d65a.firebasestorage.app",
    messagingSenderId: "619509526044",
    appId: "1:619509526044:web:9052e056759d5d9bb379d9",
    measurementId: "G-WL22K283J9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Make signInWithGoogle available globally
window.signInWithGoogle = function() {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("User signed in: ", user);
            // Redirect to home page after successful sign-in
            window.location.href = 'home.html';
        })
        .catch((error) => {
            console.error("Error during sign-in: ", error);
        });
};

export { app, analytics, auth };