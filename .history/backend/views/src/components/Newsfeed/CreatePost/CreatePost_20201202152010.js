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
                    value={state.header}
                    onChange={this.onChange}
                  />
                </Form.Field>
                <br></br>

                <Form.Field inline>
                  <input
                    type="text"
                    placeholder="description"
                    name="description"
                    value={state.description}
                    onChange={this.onChange}
                  />
                </Form.Field>
                <br></br>
                <Form.Field inline>
                  <input
                    type="text"
                    placeholder="Blood group"
                    name="blood"
                    value={state.blood}
                    onChange={this.onChange}
                  />
                </Form.Field>
              </Form>
        </div>
        </Modal.Body>
      </Modal>
      
    )
}
export default CreatePost