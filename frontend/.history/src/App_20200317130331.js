import React from 'react';
import {Switch , Route, Router} from 'react-router-dom'
import Login from './Login'
import Map from './Map'
import Dashboard from './dashboard';
import signup from './signup'

import home from './home.png'

function App () {
 
    return (
      
      
          
        <div style={{ 
          width:'100%',
          height:"auto"
        }}>
        <img src={home}>
          
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={signup} />
        </Switch>
     
        </img>  
       
          </div> 
       
 
      
            
            
        
            
      
   )
}
export default App;