import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import { Divider, Form, Label, Button, Checkbox } from "semantic-ui-react";
const CreatePost =(props)=>{
    
  
    const [header, setHeader ] = useState('header')
    const [ description ,setDescripting] = useState('desc')
    const [blood , setBlood] = useState('')

    const formSubmit=(e)=>{
        e.preventDefault()
        Axios({
            url: "http://localhost:9000/createPost/",
            method: "post",
            data: {
              // sending user email and password
              user_id:user_id,
              Blood_tag:blood,
              Header:header,
              description:description
            },
          }).then(e=>{
              localStorage.setItem('refresh','true')
          })
    }
    
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
        <Form onSubmit={formSubmit}>
                <Form.Field inline>
                  <input
                    type="text"
                    placeholder="email"
                    name="header"
                    value={header}
                    onChange={(ev)=>
                    {
                        setHeader(ev.target.value)
                    }}
                  />
                </Form.Field>
                <br></br>

                <Form.Field inline>
                  <input
                    type="text"
                    placeholder="description"
                    name="description"
                    value={description}
                    onChange={(ev)=>
                        {
                            setDescripting(ev.target.value)
                        }}
                  />
                </Form.Field>
                <br></br>
                <Form.Field inline>
                  <input
                    type="text"
                    placeholder="Blood group"
                    name="blood"
                    value={blood}
                    onChange={(ev)=>
                        {
                            setBlood(ev.target.value)
                        }}
                  />
                </Form.Field>
              </Form>
        </div>
        </Modal.Body>
      </Modal>
      
    )
}
export default CreatePost