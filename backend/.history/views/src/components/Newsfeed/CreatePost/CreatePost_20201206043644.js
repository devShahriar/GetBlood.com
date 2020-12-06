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
      super(props);
    let loggedIn = false;
    let showSignup = false;
    let isLoggedIn =false;
    this.state = {
      name: "",
      email: "",
      password: "",
      userId: null,
      validEmail: true,
      userValid: true,
      loggedIn,
      showSignup,
      role: "",
      isLoggedIn,
    };
    }
    componentDidMount() {
      this.setState({isLoggedIn:this.props.isLoggedIn})
  
      
    }
    onChange=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value,
        });
    };
    formSubmit = (ev) => {
      ev.preventDefault();
      const { name, email, password } = this.state;
  
      try {
        Axios({
          url: "http://localhost:9000/check/",
          method: "post",
          data: {
            // sending user email and password
            email: email,
            password: password,
          },
        }).then((response) => {
          // And the server sends back the user info
          // back to the client side
          console.log(response.data.user[0].role);
          this.setState({ role: response.data.user[0].role });
  
          // this.setState({ loggedIn:true,userId:response.data.userId[0].id});
          // }
  
          //  else {
          //   this.setState({userValid:false})
          //    localStorage.removeItem("token");
          //    this.setState({ loggedIn: false });
          //  }
        });
      } catch (err) {
        console.log("problem");
      }
    };
    handleSubmit(event) {
        event.preventDefault();
        alert(
          `Selected file - ${this.fileInput.current.files[0].name}`
        );
      }    
    render() {
        return (
        
          <div className="c" >
            
            <div >
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

            
            </div>
            </div>
          );
 }         
       
}
export default CreatePost