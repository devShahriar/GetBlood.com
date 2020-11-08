import React from 'react';
import home from './home.png';
import { ImageGroup } from 'semantic-ui-react';
import Login from './Login'

export default class Home extends React.Component {



     render()
     {
         return (
            <div class="ui centered aligned grid">    
         <div className="wrap">
             <div>
                 <Login />
             </div>
         </div>
         </div>
         )
     }

}