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
    const { name, email, password } = this.state;

    try {
      Axios({
        url: "http://localhost:9090/register/",
        method: "post",
        data: {
          name: name,
          email: email,
          password: password
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

  notifyMe=()=>{
      this.setState({checked:true})
        Notification.requestPermission().then(function(permission) {
            if(Notification.permission === 'granted'){
                this.setState({notification_granted:"granted"})
            }
        }).catch((err)=>{
            if(Notification.permission === 'blocked'){
                this.setState({notification_granted:"blocked"})
            
            Notification.requestPermission().then(function(permission) {
                if(Notification.permission === 'granted'){
                    this.setState({notification_granted:"granted"})
                }
                if(Notification.permission === 'blocked'){
                    this.setState({notification_granted:"blocked"})
                }
            }).catch((err)=>{
                if(Notification.permission === 'blocked'){
                    this.setState({notification_granted:"blocked"})
                }
            })}
        })
        
        messaging.usePublicVapidKey(
            "BG1ADrSkecmEUxszVCuTHJO9DpPK0EZoeg3Nh5tfIIFDIeznVMHUsMzt_jqYBMP14uOTTBbdj4g-pXtjn-O39G4"
          );
          messaging.getToken().then(current => {
            localStorage.setItem("t456", current);
            sendTokenToSever(Math.floor(Math.random() * 100), current);
            push(current);
          }).catch((err)=>{
            if(Notification.permission === 'blocked'){
                this.setState({notification_granted:"blocked"})
            
            Notification.requestPermission().then(function(permission) {
                if(Notification.permission === 'granted'){
                    this.setState({notification_granted:"granted"})
                }
                if(Notification.permission === 'blocked'){
                    this.setState({notification_granted:"blocked"})
                }
            }).catch((err)=>{
                if(Notification.permission === 'blocked'){
                    this.setState({notification_granted:"blocked"})
                }
            })}
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
        <Form>
          <Form.Field>
            <input type="text" 
            placeholder="Full name" 
            name="name" 
            value={this.state.name}
            onChange={this.onChange} />
            <Label pointing>Please enter a value</Label>
          </Form.Field>
          <Divider />

          <Form.Field inline>
            <input type="text" 
            placeholder="email" 
            name="email" 
            value={this.state.email}
            onChange={this.onChange} />
            <Label pointing="bottom">That name is taken!</Label>
          </Form.Field>
          <Divider />

          <Form.Field inline>
            <Label pointing="bottom">
              Your password must be 6 characters or more
            </Label>
            <input type="password" 
            placeholder="Password" 
            name="password" 
            value={this.state.password}
            onChange={this.onChange} />
          </Form.Field>

          <Form.Field inline>
            <Label pointing="bottom">
              Your password must be 6 characters or more
            </Label>
            <input type="password" 
            placeholder="confirm Password" 
            name="confirmpassword" 
            value={this.state.confirmpassword}
            onChange={this.onChange} />
          </Form.Field>
        </Form>
        <Divider />
        <Button inverted color="violet" onClick={this.notifyMe}>
          Allow notification
        </Button>
        <Checkbox
          label="Check this box"
          onChange={this.notifyMe}
          checked={this.state.checked}
        />
      </div>
    );
  }
}
