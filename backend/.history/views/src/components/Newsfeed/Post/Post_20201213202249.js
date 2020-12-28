import React from 'react'
import './Post.css'
import './message'
import { Button, Segment } from "semantic-ui-react";
import message from './message';
const Post = (props) => {
   
    const [showM , setShowM] = React.useState(false)
    const [text, setText] = React.useState('') 
    const sendMessage=()=>{
      
    }

    return (
        <div className='Card'>
            <p style={{textDecoration:'underline'}}>{props.data.user_name}</p>
            <h3>{props.data.Header}</h3>
            <p className="blood_tag">{props.data.Blood_tag}</p>
            <img src={props.data.url} style={{maxHeight:'450px'}}/>
            <p>{props.data.description}</p>
            <input
            style={{width:'400px' , borderRadius:'10px'}}
            />
            <Button basic color="blue" onClick={()=>{
                setShowM(true)
            }}> 
              Send message
            </Button>
            
        </div>
    )
}
export default Post