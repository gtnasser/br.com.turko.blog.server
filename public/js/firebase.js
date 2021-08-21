let firebaseConfig = {
    apiKey: "AIzaSyDBcFmRREb1LJLL2EFTVcc9o3uDm-26DqA",
    authDomain: "turko-blog.firebaseapp.com",
    projectId: "turko-blog",
    storageBucket: "turko-blog.appspot.com",
    messagingSenderId: "563534535620",
    appId: "1:563534535620:web:2a36441c4e7da5bb22a291",
    measurementId: "G-KQLYCWZJLG"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

let db = firebase.firestore();