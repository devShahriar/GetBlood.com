import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import Post from './Post/Post'
import './newfeed.css'
export default class Newsfeed extends React.Component{

    state = {
     post:[]
    }
    constructor(props){
        super(props)
        this.state = {
            post:[]
           }
    }
     componentDidMount(){
       Axios.get('http://localhost:9000/feed').then(
            r=>{ this.setState({post:r.data.post})
            console.log(this.state.post)
        }
            
        )
        console.log(this.state.post)
    }
    render(){
        let post = this.state.post.map((r,k)=>{
            return (
                <div>
                <Post key={k} data={r}></Post>
               </div>
            )
        })
        return (
            <div>
           <div className="navbar">
              
                   <button className="log">
                   login 
                  </button>
               
           </div>

           <div className="feed">
             <ul>{post}</ul>
           </div>
           </div>   
        )
    }
}