import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router";
//import DonarSignup from "./donarsignup/DonarSignup";
import { render } from "@testing-library/react";
import Axios from 'axios'
import { Divider, Form, Label,Checkbox } from "semantic-ui-react";
export default class usersignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donar: "",
    };
  }

  formSubmit = (ev) => {
    ev.preventDefault();
    const { name, email, password, phone } = this.state;

    try {
      Axios({
        url: "https://localhost:9000/registerDonar",
        method: "post",
        data: {
          name: name,
          email: email,
          password: password,
          phone: phone,
        },
      }).then((response) => {
        if (response.data.user_exist) {
          localStorage.setItem("token", "authenticated");
          this.setState({
            loggedIn: true,
            userId: response.data.userId[0].id,
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
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form onSubmit={this.formSubmit}>
              <Form.Field>
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  autoFocus
                />
                <Label pointing="above">Please enter a value</Label>
              </Form.Field>
              <Divider />

              <Form.Field inline>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  autoFocus
                />
            
              </Form.Field>
              <Divider />

              <Form.Field>
                <input
                  type="text"
                  placeholder="phone"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                  autoFocus
                />
              </Form.Field>

              <Divider />
              <Form.Field>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  autoFocus
                />
                <Label pointing="below">
                  Your password must be 6 characters or more
                </Label>
              </Form.Field>
              <Divider />
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
