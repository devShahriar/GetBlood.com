import React from 'react';
import home from './home.png';
import { ImageGroup } from 'semantic-ui-react';
import Login from '../../Login'
import drop from './drop.png'
import b from './b.png'
import Radium, {StyleRoot} from 'radium';
import './home.css'
import { bounceInLeft } from 'react-animations';
import { Card, CardImg,CardBody, Button, FormInput, CardHeader } from "shards-react"
import { Redirect } from 'react-router-dom';
import MyVerticallyCenteredModal from '../Signup/signup'
export default class Home extends React.Component {

    constructor() {
        super()
       let loginClicked=false
       let showSignup = false;
        this.state = {
        
          loginClicked,
          showSignup
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
          <div style={{width:'450px', 
                      height:'250px',
          backgroundColor:'rgba(78,85,115,0.85)' ,
          marginTop:'170px'
          ,
          marginLeft:'150px',
          borderRadius:'15px'}}>
           <StyleRoot>
               <div style={styles.bounceInLeft } >               
                
                <img style={{ width:'100px'}} src={drop} ></img>
                <h1>Welcome to Getblood.com</h1>
               
               <div >
                <Button type="submit" outline pill theme="info"  onClick={this.login_clicked}> Login </Button>
                <Button inverted color='teal' type='submit' onClick={()=> {
                    this.setState({showSignup:true})
                  }}>
                  sign up ?
                  </Button>
               </div>
             </div>
             </StyleRoot>
             </div> 
             <MyVerticallyCenteredModal
               show={this.state.showSignup}
               onHide={()=>{
                 this.setState({showSignup:false})
                           }} />
         </div>
              
         )
     }

}