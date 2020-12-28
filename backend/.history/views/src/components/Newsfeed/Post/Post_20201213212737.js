import React from 'react'
import './Post.css'
import './message'
import { Redirect } from "react-router";
import { Button, Segment } from "semantic-ui-react";
import message from './message';
const Post = (props) => {
   
  
   
    
  
    return (
        <div className='Card'>
            <p style={{textDecoration:'underline'}}>{props.data.user_name}</p>
            <h3>{props.data.Header}</h3>
            <p className="blood_tag">{props.data.Blood_tag}</p>
            <img src={props.data.url} style={{maxHeight:'450px'}}/>
            <p>{props.data.description}</p>
          
           
            <Button basic color="blue" onClick={()=>{
                return <Redirect to={{ pathname: "/message" }}></Redirect>;
            }}> 
              Send message
            </Button>
   
        </div>
    )
}
export default Post