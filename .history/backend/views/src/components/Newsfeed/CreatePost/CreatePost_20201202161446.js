import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Axios from 'axios'
import './create.css'
import { Divider, Form, Label, Button, Checkbox } from "semantic-ui-react";
class CreatePost extends React.Component{
    
    constructor(props){
        super(props)
        let blood = ''
        let header=''
        let description=''
        this.state = {
            
            header:"",
            description:"",
            blood:""
        };
    }
    componentDidMount() {
        this.setState({blood:"",
        header:"",
        description:""})
    
      }
    onChange = (ev)=>{
        this.setState({
            [ev.target.name]: ev.target.value,
          });
    }
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
           
        
          <div>
            <div className="wrap-login100">
            <Form onSubmit={this.formSubmit}>
                    <Form.Field inline>
                      <input
                        type="text"
                        placeholder="header"
                        name="header"
                        value={this.state.header}
                        onChange={this.onChange}
                      />
                    </Form.Field>
                    <br></br>
    
                    <Form.Field inline>
                      <input
                        type="text"
                        placeholder="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                      />
                    </Form.Field>
                    <br></br>
                    <Form.Field inline>
                      <input
                        type="text"
                        placeholder="Blood group"
                        name="blood"
                        value={this.state.blood}
                        onChange={this.onChange}
                      />
                    </Form.Field>
                  </Form>
                  <Button inverted color="purple" onClick={this.formSubmit}>
                Login
              </Button>
              
            </div>
            </div>
          
        )
    }
  
}
export default CreatePost