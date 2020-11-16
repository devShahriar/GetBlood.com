import React,{useEffect,useState} from 'react'
import Axios from 'axios'

const Newsfeed = () =>{
    const [posts , setPosts] = useState([])
let p=null;
useEffect(()=>{
Axios.get('http://localhost:9000/feed/').then(r=>{


setPosts([...posts]=r.data.post);
 
})
console.log(posts)
},[])



    return (
        <div>
        <h1>{}</h1>
        </div>
    )
    }
export default Newsfeed