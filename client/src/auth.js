<<<<<<< HEAD
// import { useHistory } from 'react-router-dom';
// // Firebase App (the core Firebase SDK) is always required and must be listed first
// import firebase from "firebase/app";
// import "firebase/auth";
// // Your web app's Firebase configuration
// let history = useHistory()
// var firebaseConfig = {
//   apiKey: "AIzaSyCZS4xZw0wX1O3ehyoT3JwA2coA8xW2yHY",
//   authDomain: "mgazins-8c0fc.firebaseapp.com",
//   projectId: "mgazins-8c0fc",
//   storageBucket: "mgazins-8c0fc.appspot.com",
//   messagingSenderId: "842270150015",
//   appId: "1:842270150015:web:1be2b9690091cd49561e4a"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const signupform = document.getElementById("signupForm");
// signupform.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = document.querySelector('input[name=email]').value
//   const password = document.querySelector('input[name=password').value
//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((data) => {
//       console.log(data);
//       history.push('/home');
//     }).catch(function (err) {
//       console.log(err);
//     })
// })
// const signout = document.getElementById("logoutbtn");
// signout.addEventListener("click", () => {
//   firebase.auth().signOut().then(function (data) {
//     //window.location.href("signin");       //redirect to login page
//     if (data.user) {
//       history.push('/home')
//     }
//   }).catch(function (err) {
//     console.log(err);
//   })
// })
// const signinform = document.getElementById("signinForm");
// signinform.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = document.querySelector('input[name=email]').value
//   const password = document.querySelector('input[name=password').value
//   firebase.auth().signInWithEmailAndPassword(email, password)
//     .then((data) => {
//       console.log(data);
//       var user = data.user;
//       if (user) {
//         history.push('/home');
//       }
//       else { history.push('/signin') }
//     }).catch(function (err) {
//       console.log(err);
//     })
// })
=======
 // Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/auth";
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCZS4xZw0wX1O3ehyoT3JwA2coA8xW2yHY",
    authDomain: "mgazins-8c0fc.firebaseapp.com",
    projectId: "mgazins-8c0fc",
    storageBucket: "mgazins-8c0fc.appspot.com",
    messagingSenderId: "842270150015",
    appId: "1:842270150015:web:1be2b9690091cd49561e4a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const signupform=document.getElementById("signupForm");
signupform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email=document.querySelector('input[name=email]').value
    const password=document.querySelector('input[name=password').value
    firebase.auth().createUserWithEmailAndPassword(email,password)
  .then((data) =>{
     console.log(data);
  }).catch(function(err){
     console.log(err);
  })
})
const signout=document.getElementById("logoutbtn");
signout.addEventListener("click",()=>{
    firebase.auth().signOut().then(function(){
        window.location.href("signin");       //redirect to login page
    }).catch(function(err){
        console.log(err);
    })
})
const signinform=document.getElementById("signinForm");
signinform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email=document.querySelector('input[name=email]').value
    const password=document.querySelector('input[name=password').value
    firebase.auth().signInWithEmailAndPassword(email,password)
  .then((data) =>{
     console.log(data);
     var user=data.user;
     if(user){
         window.location.href("/public/index");
     }
     else{ window.location.href("signin") }
  }).catch(function(err){
     console.log(err);
  })
})
>>>>>>> 7242815bec7f53088a4f83270cef59ed095d4d82
