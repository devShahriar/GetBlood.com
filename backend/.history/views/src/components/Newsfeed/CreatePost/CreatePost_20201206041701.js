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
        <div>
          <div className="wrap-login100" >
          <form onSubmit="handleSubmit">
          <br></br>
         Title : 
      
         <input
            className="ti"
            type="text"
            placeholder="description"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            autoFocus
          />
          <br></br>
          Description:
            <textarea
           
            type="text"
            placeholder="header"
            name="header"
            value={this.state.header}
            onChange={this.onChange}
            autoFocus
          />
          <br></br>
          <textarea
           
           type="text"
           placeholder="description"
           name="description"
           value={this.state.description}
           onChange={this.onChange}
           autoFocus
         />
          
        </form> 
        </div>
            </div>
          );
 }         
       
}
export default CreatePost