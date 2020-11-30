import React from 'react';
import home from './home.png';
import { ImageGroup } from 'semantic-ui-react';
import Login from './Login'
import Radium, {StyleRoot} from 'radium';
import { bounceInLeft } from 'react-animations';
import { Card, CardBody, Button, FormInput, CardHeader } from "shards-react"
export default class Home extends React.Component {



     render()
     {
        const styles = {
            bounceInLeft: {
              animation: 'x 2s',
              animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
            }
          }
         return (
             
         <div className="wrap">
           <StyleRoot>
               <div style={styles.bounceInLeft } >
               
                <Card className="segment " style={{ paddingTop:'200px'}}>
                <Button  outline className="example" style={{ width:"100px"}}>Login</Button>
                </Card>
             </div></StyleRoot>
             
            
         </div>
         
         )
     }

}