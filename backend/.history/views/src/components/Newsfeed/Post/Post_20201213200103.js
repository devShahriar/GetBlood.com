import React from 'react'
import './Post.css'
import './message'
import { Button, Segment } from "semantic-ui-react";
const Post = (props) => {
   
    const [showM , setShowM] = React.useState(false)
     
    sendMessage=()=>{

    }

    return (
        <div className='Card'>
            <p style={{textDecoration:'underline'}}>{props.data.user_name}</p>
            <h3>{props.data.Header}</h3>
            <p className="blood_tag">{props.data.Blood_tag}</p>
            <img src={props.data.url} style={{maxHeight:'450px'}}/>
            <p>{props.data.description}</p>
            <Button basic color="blue" onClick={()=>{
                setShowM(true)
            }}> 
              Send message
            </Button>
            
        </div>
    )
}
export default Post