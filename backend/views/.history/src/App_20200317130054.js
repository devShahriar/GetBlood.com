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
          
        }}>
        <img src={'https://www.behance.net/gallery/57851213/Luciad-Interact'}></img>  
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signup" component={signup} />
        </Switch>
          </div>
     
 
      
            
            
        
            
      
   )
}
export default App;