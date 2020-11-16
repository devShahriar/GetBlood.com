import React,{useEffect,useState} from 'react'
import axios from 'axios'
const Newsfeed = () =>{
const [posts , setPost] = useState('')
useEffect(()=>{
   setPost(axios.get('/api/feed'))
})



    return (
    <div>
        <h1>{posts}</h1>

    </div>)
}

export default Newsfeed