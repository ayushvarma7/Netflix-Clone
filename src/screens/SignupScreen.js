import React, { useRef } from 'react';
import { auth } from '../firebase';

import './SignupScreen.css';


function SignupScreen() {
    const emailRef= useRef(null);
    const passwordRef= useRef(null); 
    //useState renders on each change, useRef is silent (doesn't re-render)

const register =(e)=>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    ).then((authUser)=>{ //do, if promise persists i.e create user and log the details
        console.log(authUser);
    }).catch((error)=>{ //if the promise fails
        alert(error.message);
    });
};

const signIn=(e)=>{
    e.preventDefault(); //prevents refresh 

    auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    ).then((authUser)=>{ // i.e signIn the user and log the details
        console.log(authUser);
    }).catch((error)=>{ //if not, alert!
        alert(error.message);
    });
} 

    return (
        <div className="signupScreen"> 
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password"/>
                <button type="submit" onClick={signIn}>Sign In</button>
                <h4> <span className="signupScreen__gray"> New to Netflix? </span>
               <span className="signupScreen__link" onClick={register}> Sign Up now.</span>
               </h4>
            </form>  
        </div>
    )
}

export default SignupScreen
