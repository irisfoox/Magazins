import React from 'react'
import { useHistory } from 'react-router-dom'
//import firebase from "firebase/app";
//import "firebase/auth";
export default function Login() {
    let history=useHistory();
    return (
        <div>
            <h1>Wellcome to magazins</h1>
            <button onclick={history.push('/signup')}>Sign up</button>
            <button onclick={history.push('/signin')}>Sign in</button>
            <button id="logoutbtn">log out</button>
        </div>
    )
}

    
    
    
