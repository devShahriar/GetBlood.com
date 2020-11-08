import React from 'react';
import home from './home.png';
import { ImageGroup } from 'semantic-ui-react';
import Login from './Login'
import drop from './drop.png'
import Radium, {StyleRoot} from 'radium';
import { bounceInLeft } from 'react-animations';
import { Card, CardImg,CardBody, Button, FormInput, CardHeader } from "shards-react"
import { Redirect } from 'react-router-dom';
export default class Home extends React.Component {

    toLoginPage=()=>{
       render(){
        return ( <Redirect to={{ pathname:'/login'}}/>)
       }
            
      
         
    }

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
                <CardImg style={{ width:'100px'}}src={drop} />   
                <CardHeader className="f">Welcome to Getblood.com</CardHeader>

                
               <div className= "but">
                <Button outline pill theme="info" className="example" onclick={this.toLoginPage}> Login </Button>
                <Button outline pill theme="danger" className="example"> signup </Button>
               </div>
               
                </Card>
             </div></StyleRoot>
             
            
         </div>
         
         )
     }

}