import React from 'react';
import home from './home.png';
import { ImageGroup } from 'semantic-ui-react';
import Login from './Login'
import drop from './drop.png'
import Radium, {StyleRoot} from 'radium';
import { bounceInLeft } from 'react-animations';
import { Card, CardImg,CardBody, Button, FormInput, CardHeader } from "shards-react"
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
               
                <Card className="segment ">
                 <CardHeader>Welcome to Getblood.com</CardHeader>

                <CardImg style={{ width:'100px'}}src={drop} />   
               <div className= "but">
                <Button outline pill theme="info" className="example"> Login </Button>
                <Button outline pill theme="danger" className="example"> signup </Button>
               </div>
               
                </Card>
             </div></StyleRoot>
             
            
         </div>
         
         )
     }

}