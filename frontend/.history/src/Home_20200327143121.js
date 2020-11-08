import React from 'react';
import home from './home.png';
import { ImageGroup } from 'semantic-ui-react';
import Login from './Login'
import drop from './drop.png'
import b from './b.png'
import Radium, {StyleRoot} from 'radium';
import './App.css'
import { bounceInLeft } from 'react-animations';
import { Card, CardImg,CardBody, Button, FormInput, CardHeader } from "shards-react"
import { Redirect } from 'react-router-dom';
export default class Home extends React.Component {

    constructor() {
        super()
       let loginClicked=false
        this.state = {
        
          loginClicked
        }
        
      }
     login_clicked=(e)=> {
        e.preventDefault()
         console.log('i am clicked')
         this.setState({
             loginClicked:true
         })
     }
     render()
     {
       if(this.state.loginClicked===true){
            console.log('asdfasdfasdfsdf')
            this.setState({ loginClicked:false})
            return (<Redirect to={{ pathname:'/login'}} />);
            
        }
        const styles = {
            bounceInLeft: {
              animation: 'x 2s',
              animationName: Radium.keyframes(bounceInLeft, 'bounceInLeft')
            }
          }
         return (
             
         <div className="wrap">
          <div style={{width:'250px', 
                      height:'500px',
          backgroundColor:'rgba(245,66,99,0.75)' ,
          marginTop:'170px'}}>
           <StyleRoot>
               <div style={styles.bounceInLeft } >               
                
                <img style={{ width:'100px'}} src={drop} ></img>
                <h1>Welcome to Getblood.com</h1>
               
               <div >
                <Button type="submit" outline pill theme="info"  onClick={this.login_clicked}> Login </Button>
                <Button outline pill theme="danger" > signup </Button>
               </div>
             </div>
             </StyleRoot>
             </div>
         </div>
      
         )
     }

}