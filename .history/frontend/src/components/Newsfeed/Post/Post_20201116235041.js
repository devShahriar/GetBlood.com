import React from 'react'

const Post = (props) => {
   // console.log(user_name)
    return (
        <div>
            <p>{props.data.user_name}</p>
            <h1>{props.data.Header}</h1>
            <p>{props.data.Blood_tag}</p>
            <p>{props.data.description}</p>
        </div>
    )
}
export default Post