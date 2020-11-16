import React,{useEffect} from 'react'
import axios from 'axios'
const Newsfeed = () =>{

useEffect(()=>{
    const post = axios.get('/api/feed')
})



    return (
    <div>
        <h1>{post}</h1>

    </div>)
}

export default Newsfeed