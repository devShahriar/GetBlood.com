import React from 'react';
import home from './home.png';
import { ImageGroup } from 'semantic-ui-react';
import Login from './Login'

export default class Home extends React.Component {



     render()
     {
         return (
         <div style={{ background: `url(${home})`,
            backgroundRepeat: no-repeat,
            backgroundSize: auto}}>
             <Login>

             </Login>
         </div>)
     }

}