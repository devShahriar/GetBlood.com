import React from 'react';
import {Switch , Route, Router} from 'react-router-dom'
import Login from './Login'
import Map from './Map'
import Dashboard from './dashboard';
import signup from './signup'
import Home from './Home'
import home from './home.png'

function App () {
 
    return (
      
      
          
        <div style={{ 
          width:'100%',
          height:"auto",
          backgroundImage:`url(${home})`
        }}>
        <Home>
        <Login style={{backgroundImage:`url(${home})`}}>
        </Login>  
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={signup} />
        </Switch>
        
        </Home>
        
       
    
      </div> 
       
 
      
            
            
        
            
      
   )
}
export default App;