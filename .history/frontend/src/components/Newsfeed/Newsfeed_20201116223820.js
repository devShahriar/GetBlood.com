import React,{useEffect,useState} from 'react'
import Axios from 'axios'
const Newsfeed = () =>{
const [posts , setPost] = useState('')
useEffect(()=>{
Axios.get('http://localhost:9000/feed/').then(r=>{
 setPost(r)
 console.log(posts)
})
console.log(posts)
},[])



    return (
    <div>
        <h1>{posts[0]}</h1>

    </div>)
}

export default Newsfeed