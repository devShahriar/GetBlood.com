import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Axios from 'axios'
import './create.css'
import { Divider, Form, Label, Button, Checkbox } from "semantic-ui-react";
class CreatePost extends React.Component{
    
    constructor(props) {
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
      onChange = (ev) => {
        this.setState({
          [ev.target.name]: ev.target.value,
        });
      };
    formSubmit=(ev)=>{
        ev.preventDefault()
        const user_id = localStorage.getItem('outhId')
        Axios({
            url: "http://localhost:9000/createPost/",
            method: "post",
            data: {
              // sending user email and password
              user_id:user_id.id,
              Blood_tag:this.state.blood,
              Header:this.state.header,
              description:this.state.description
            },
          }).then(e=>{
              localStorage.setItem('refresh','true')
          })
    }
    render(){
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

            </div>
            </div>
          
        )
    }
  
}
export default CreatePost