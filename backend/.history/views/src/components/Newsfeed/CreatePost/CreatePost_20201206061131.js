import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Axios from "axios";
import "./create.css";
import { bounceInLeft } from "react-animations";
import Radium from "radium";
import onClickOutside from "react-onclickoutside";
import { Redirect, Route } from "react-router-dom";
import { Divider, Form, Label, Button, Checkbox } from "semantic-ui-react";
class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    let showSignup = false;
    let isLoggedIn = false;
    this.state = {
      user_id:"",
      user_name:"",
      header: "",
      blood_tag: "",
      description: "",
    };
  }
  componentDidMount() {
    const obj = localStorage.getItem("auth")
    console.log(obj)
    this.setState({ user_id:this.props.user_id , user_name:this.props.user_name });
  }
  onChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  };
  formSubmit = (ev) => {
    ev.preventDefault();
    const { header , blood_tag , description} = this.state;

    try {
      Axios({
        url: "http://localhost:9000/check/",
        method: "post",
        data: {
          // sending user email and password
          
          blood_tag:blood_tag,
          header:header,
          description:description,
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
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  }
  render() {
    return (
      <div className="c">
        <div>
          <Form onSubmit={this.formSubmit}>
            <Form.Field inline>
              <input
                type="text"
                placeholder="Title"
                name="header"
                value={this.state.header}
                onChange={this.onChange}
              />
            </Form.Field>
            <br></br>

            <Form.Field inline>
              <textarea
                type="text"
                placeholder="Description"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
              />
              <select value={this.state.blood_tag} onChange={this.handleChange}>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
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
export default CreatePost;
