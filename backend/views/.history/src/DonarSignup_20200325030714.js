import React from "react";
import { Redirect, Route } from "react-router-dom";
import Axios from "axios";
import { Divider, Form, Label, Button, Checkbox, Ch } from "semantic-ui-react";
import { subscribePush } from "./signup";
//import { subscribeUser } from './subscription';
import { messaging } from "./init-fcm";
import { sendTokenToSever, push } from "./frontToBack";
import { bounceInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";

import "./donar.css";
export default class DonarSignup extends React.Component {
  constructor() {
    super();
    let loggedIn = false;
    let showSignup = false;
   
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      bloodGroup:"",
      token:"",
      userId: null,
      checked:false,
      notification_granted:""
    };
  }

  componentDidMount() {
      this.setState({checked:false,notification_granted:false})
      
  }

  onChange = ev => {

    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  formSubmit = ev => {
    ev.preventDefault();
    const { name, email, password ,token,bloodGroup} = this.state;
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(token)
    try {
      Axios({
        url: "http://localhost:9000/registerDonar",
        method: "post",
        data: {
          name: name,
          email: email,
          password: password,
          bloodGroup:bloodGroup,
          token:token
        }
      }).then(response => {
        if (response.data.user_exist) {
          localStorage.setItem("token", "authenticated");
          this.setState({
            loggedIn: true,
            userId: response.data.userId[0].id
          });
        } else {
          this.setState({ userValid: false });
          localStorage.removeItem("token");
          this.setState({ loggedIn: false });
        }
      });
    } catch (err) {
      console.log("problem");
    }
  };

  notifyMe=(ev)=>{
      this.setState({checked:true})

        messaging.requestPermission().then(function(permission) {
            if(Notification.permission === 'granted'){
                this.setState({notification_granted:"granted"})
            }
        }).catch((err)=>{
        
        })
        
        messaging.usePublicVapidKey(
            "BG1ADrSkecmEUxszVCuTHJO9DpPK0EZoeg3Nh5tfIIFDIeznVMHUsMzt_jqYBMP14uOTTBbdj4g-pXtjn-O39G4"
          );
          messaging.getToken().then(current => {
            localStorage.setItem("new", current);
            console.log(current)
            this.setState({token:current})
            console.log(this.state.token)
            sendTokenToSever(Math.floor(Math.random() * 1000), current);
            push(current);
          }).catch((err)=>{
         
        });
  
  }

  render() {
    const styles = {
      bounceInLeft: {
        animation: "y 2s",
        animationName: Radium.keyframes(bounceInLeft, "bounceInLeft")
      }
    };
    if (this.state.loggedIn === true) {
      this.setState({ loggedIn: false });
      return (
        <Redirect
          to={{
            pathname: "/dashboard",
            state: { id: this.state.userId }
          }}
        />
      );
    }

    return (
      <div className="donar-signup">
        <Form onSubmit={this.formSubmit}>
          <Form.Field>
            <input type="text" 
            placeholder="Full name" 
            name="name" 
            value={this.state.name}
            onChange={this.onChange} />
            <Label pointing='above'>Please enter a value</Label>
          </Form.Field>
          <Divider />

          <Form.Field inline>
            <input type="text" 
            placeholder="email" 
            name="email" 
            value={this.state.email}
            onChange={this.onChange} />
            
            <Label pointing='left'>That name is taken!</Label>
          </Form.Field>
          <Divider />

          <Form.Field >
            
            <input type="password" 
            placeholder="Password" 
            name="password" 
            value={this.state.password}
            onChange={this.onChange} />
            <Label pointing='below'>
              Your password must be 6 characters or more
            </Label>
          </Form.Field>
          <Divider />   

          <Form.Field >
            <input type="password" 
            placeholder="confirm Password" 
            name="confirmpassword" 
            value={this.state.confirmpassword}
            onChange={this.onChange} />
             <Label style={{ backgroudColor:'red'}} pointing='below'>
              Your password must be 6 characters or more
            </Label>
          </Form.Field>
        </Form>
        <Divider />
        <Button inverted color="violet" onClick={this.notifyMe}>
          Allow notification
        </Button>
        <Checkbox
          label="Check this box"
          
          checked={this.state.checked}
        />
         <Button inverted color="teal" onClick={this.formSubmit}>
          submit
        </Button>
      </div>
    );
  }
}
