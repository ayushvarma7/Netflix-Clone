import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';


import './App.css';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';


export const App = () => {
  // const user = null;
  const user= useSelector(selectUser);  //this selectUser returns the user and logs in then
  const dispatch= useDispatch();

  useEffect(() => { //checks for if the user is logged in 
    const unsubscribe= auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //Logged In
        // console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email:userAuth.email,
        })
        );
      }else{
        //Logged out
        dispatch(logout);
      }
    })
    return unsubscribe; //detaching the onAuth listner
    // by detaching it prevents the creation of duplicate elements of unsubscribe
    // i.e basically prevents reducing the efficiency
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? //if no user, route to login screen
          <LoginScreen />
          : (<Switch>

            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>)
        }

      </Router>
    </div>
  )
}

export default App;