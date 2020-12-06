import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Axios from 'axios'
import './create.css'
import { bounceInLeft } from "react-animations";
import Radium from "radium";
import onClickOutside from "react-onclickoutside";
import { Redirect, Route } from "react-router-dom";
import { Divider, Form, Label, Button, Checkbox } from "semantic-ui-react";
export default class CreatePost extends React.Component{
    constructor(props){
        super(props)
        this.state={
            header:""
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
            <div className='c'>
                <form>
         Title : 
        <input
            className="ti"
            type="text"
            placeholder="bloodGroup"
            name="bloodGroup"
            value={this.state.bloodGroup}
            onChange={this.onChange}
            autoFocus
          />
          <br></br>
          Description:
            <textarea
            type="text"
            placeholder="description"
            name="bloodGroup"
            value={this.state.bloodGroup}
            onChange={this.onChange}
            autoFocus
          />
        </form> 
            </div>
          );
 }         
       
}
