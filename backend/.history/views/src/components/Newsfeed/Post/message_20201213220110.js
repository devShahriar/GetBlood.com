import { Button, Segment } from "semantic-ui-react";
import React from 'react'
import './message.css'
import { Redirect } from "react-router";
const message = (props) =>{

    
    return (
        <div>

       
        <h1> {props.location.state.id} </h1>
        <div className="w">
            <input
            
            />
              <Button basic color="blue" onClick={()=>{
              
            }}> 
              Send message
            </Button>
        </div>
        </div>    
    )

}
export default message