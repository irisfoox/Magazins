import React from 'react'
//import firebase from "firebase/app";
//import "firebase/auth";
export default function Signup() {
    return (
        <div>
            <h2>Signing up page</h2>
            <form id="signupForm">
            <input type="email" name="email" placeholder="Email..."/><br></br>
            <input type="password" name="password" placeholder="Password..." /><br></br>
            <button>Submit</button>  
            </form>
        </div>
    )
}

    
    