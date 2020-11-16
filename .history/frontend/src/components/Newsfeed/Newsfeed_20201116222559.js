import React,{useEffect,useState} from 'react'
import axios from 'axios'
const Newsfeed = () =>{
const [posts , setPost] = useState('')
useEffect(()=>{
axios.get('/api/feed').then(r=>{
 console.log(r)
})

},[])



    return (
    <div>
        <h1>{posts}</h1>

    </div>)
}

export default Newsfeed