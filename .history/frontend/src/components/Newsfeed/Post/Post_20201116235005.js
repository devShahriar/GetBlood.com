import React from 'react'

const Post = (props) => {
    console.log(user_name)
    return (
        <div>
            <p>{props.user_name}</p>
            <h1>{props.Header}</h1>
            <p>{props.Blood_tag}</p>
            <p>{props.description}</p>
        </div>
    )
}
export default Post