import React,{useEffect,useState} from 'react'
import Axios from 'axios'

const Newsfeed = () =>{
    const [posts , setPosts] = useState([{
        post_id:'',
        user_id:'',
        user_name:'',
        Blood_tag:'',
        Header:'',
        description:''
    }])

useEffect(()=>{
Axios.get('http://localhost:9000/feed/').then(r=>{

console.log(r.data.post)
setPosts([r.data.post]);
console.log(posts)
})

},[])



    return (
        <div>
        <h1>{}</h1>
        </div>
    )
    }
export default Newsfeed