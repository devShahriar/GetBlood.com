import React,{useEffect,useState} from 'react'
import Axios from 'axios'

export default class Newsfeed extends React.Component{

    state = {
     post:[]
    }
    constructor(props){
        
    }
    componentDidMount(){
         Axios.get('http://localhost:9000/feed').then(
            r=>{ this.setState({post:r.data.post})}
        )
        console.log(this.state.post)
    }
    render(){
        return (
            <div>
                dsafasdfasd
            </div>    
        )
    }
}