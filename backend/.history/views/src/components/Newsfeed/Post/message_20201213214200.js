import { Button, Segment } from "semantic-ui-react";
import React from 'react'
const message = () =>{

    
    return (
        <div className="w">
            <input
            style={{width:'500px'}}
            />
              <Button basic color="blue" onClick={()=>{
               
            }}> 
              Send message
            </Button>
        </div>    
    )

}
export default message