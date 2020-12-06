import React from 'react';
import {Switch , Route, Router, Redirect} from 'react-router-dom'
import Login from './components/Login/Login'
import Map from './components/Map/Map.js'
import Dashboard from './components/Dashboard/dashboard';
import signup from './components/Signup/signup'
import Home from './components/Home/Home'
//import home from './home.png'
import './App.css'
import Newsfeed from './components/Newsfeed/Newsfeed'
import DonarSignup from './DonarSignup';
import userSignup from './userSignup';
import ShowResult from './components/Map/SearchResult/SearchResult'
function App () {
  
    return (

          <div>
        <Switch>
        <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/" component={Newsfeed} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/donarS" component={DonarSignup}/>
          <Route exact path="/userS" component={userSignup}/>
         
        </Switch>
        </div>
   )
}
export default App;