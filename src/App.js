import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';


import './App.css';


export const App = () => {
  const user = null;
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