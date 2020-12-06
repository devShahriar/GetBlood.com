import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Axios from 'axios'
import './create.css'
import { bounceInLeft } from "react-animations";
import Radium from "radium";
import onClickOutside from "react-onclickoutside";
import { Redirect, Route } from "react-router-dom";
import { Divider, Form, Label, Button, Checkbox } from "semantic-ui-react";
class CreatePost extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:"",
            header:"",
            description:""
        }
        this.input = React.createRef()
    }
   
    onChange=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        alert(
          `Selected file - ${this.fileInput.current.files[0].name}`
        );
      }    
    render() {
        return (
        
          <div >
            
            <div className="wrap-login100">
              <Form onSubmit={this.formSubmit}>
                <Form.Field inline>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </Form.Field>
                <br></br>

                <Form.Field inline>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  <Label color="red" pointing="above">
                    invalid password
                  </Label>
                </Form.Field>
                <br></br>
              </Form>

              <Button inverted color="purple" onClick={this.formSubmit}>
                Login
              </Button>
              

              <Button
                inverted
                color="teal"
                type="submit"
                onClick={() => {
                  this.setState({ showSignup: true });
                }}
              >
                sign up ?
              </Button>

              <MyVerticallyCenteredModal
                show={this.state.showSignup}
                onHide={() => {
                  this.setState({ showSignup: false });
                }}
              />
            </div>
            </div>
          );
 }         
       
}
export default CreatePost