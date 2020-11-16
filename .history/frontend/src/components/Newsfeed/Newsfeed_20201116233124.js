import React,{useEffect,useState} from 'react'
import Axios from 'axios'

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
        let post = this.state.post.map(r=>{
            return (
                <li>
                    
                </li>
            )
        })
        return (
           <div>
             <ul>{post}</ul>
           </div>   
        )
    }
}