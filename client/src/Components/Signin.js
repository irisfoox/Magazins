import React from 'react'
//import firebase from "firebase/app";
//import "firebase/auth";
export default function Signin() {
  return (
    <div>
      <h2>Signing in page</h2>
      <form id="signinForm">
      <input type="email" name="email" placeholder="Email..."/><br></br>
      <input type="password" name="password" placeholder="Password..." /><br></br>
      <button>Submit</button>  
      </form>
    </div>
  )
}
