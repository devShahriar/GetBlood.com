import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import { Divider, Form, Label, Button, Checkbox } from "semantic-ui-react";
const CreatePost =(props)=>{
    
  
    const [header, setHeader ] = useState('header')
    const [ description ,setDescripting] = useState('desc')
    const [blood , setBlood] = useState('')

    
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
             asdfasf
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
        <Form onSubmit={this.formSubmit}>
                <Form.Field inline>
                  <input
                    type="text"
                    placeholder="email"
                    name="header"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </Form.Field>
                <br></br>

                <Form.Field inline>
                  <input
                    type="text"
                    placeholder="description"
                    name="description"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </Form.Field>
                <br></br>
              </Form>
        </div>
        </Modal.Body>
      </Modal>
      
    )
}
export default CreatePost