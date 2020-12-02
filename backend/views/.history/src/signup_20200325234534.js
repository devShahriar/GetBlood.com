import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router';
import DonarSignup from './DonarSignup'
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Choose your role 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button variant="outline-info">General user</Button>{'if you are searching for blood click here'}
        <br></br>
        <Button size='lg' variant="outline-danger"> Blood bank admin </Button>{' click to join as blood bank admin'}
        <br></br>
    <Button variant="outline-warning" onClick={()=>{ <Redirect to={{ pathname:'/donarS'}}/>}}> Donor</Button>{' click to sign up as a donor'}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default MyVerticallyCenteredModal;