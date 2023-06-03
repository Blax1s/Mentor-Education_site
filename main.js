const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAi4SBw0ZVHvZcZeK56eOe5dic6u9YYaFU",
    authDomain: "signuppage-7bafe.firebaseapp.com",
    projectId: "signuppage-7bafe",
    storageBucket: "signuppage-7bafe.appspot.com",
    messagingSenderId: "1013769884829",
    appId: "1:1013769884829:web:1b850260f257c7df643074",
    measurementId: "G-10N769LP7L"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();



const signup = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            document.write("You are signed Up");
            console.log(userCredential);
            // ... 
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
            // ..
        });


};


const signin=() => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    document.write("You are signed In");
    console.log(userCredential);

    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
}