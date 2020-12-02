import React from 'react'
import './Post.css'
const Post = (props) => {
   // console.log(user_name)
    return (
        <div className='Card'>
            <p className="username">{props.data.user_name}</p>
            <h1>{props.data.Header}</h1>
            <p>{props.data.Blood_tag}</p>
            <p>{props.data.description}</p>
        </div>
    )
}
export default Post