import React from 'react'
import './Post.css'
const Post = (props) => {
  // console.log()
    return (
        <div className='Card'>
            <p>{props.data.user_name}</p>
            <h3>{props.data.Header}</h3>
            <p className="blood_tag">{props.data.Blood_tag}</p>
            <img src={props.data.url} alt={alt} />
            <p>{props.data.description}</p>

        </div>
    )
}
export default Post