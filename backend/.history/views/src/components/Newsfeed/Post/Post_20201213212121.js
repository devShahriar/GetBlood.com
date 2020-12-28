import React from 'react'
import './Post.css'
import './message'
import { Button, Segment } from "semantic-ui-react";
import message from './message';
const Post = (props) => {
   
    const [showM , setShowM] = React.useState(false)
    const [name, setName] = React.useState("");
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
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
            <form onSubmit={handleSubmit}>
      <label>
        Frirst Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
        </div>
    )
}
export default Post