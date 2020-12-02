import React from 'react'
import './Post.css'
const Post = (props) => {
   // console.log(user_name)
   console.log(props.data)
    return (
        <div className='Card'>
            <p className="username">{props.data.user_name}</p>
            <p className="header">{props.data.Header}</p>
            <p className="tag">{props.data.Blood_tag}</p>
            <p>{props.data.descritption}</p>
        </div>
    )
}
export default Post