import React, { useEffect, useState } from "react";
import Axios from "axios";
import Post from "./Post/Post";
import PropTypes from 'prop-types';
import CreatePost from './CreatePost/CreatePost'
import "./newfeed.css";
import { Button, Segment } from "semantic-ui-react";
import LoginModal from "../Login/LoginModal";
import flash from "react-animations/lib/flash";
class Newsfeed extends React.Component {
  state = {
    post: [],
    isLoggedIn:false
  };
   
  constructor(props) {
    super(props);
    let isLoggedIn=false;
    this.state = {
      post: [],
      isLoggedIn:false,
      bloodGroup: "",
    };
    
  }
  componentDidMount() {
    
    
  
    Axios.get("http://localhost:9000/feed").then((r) => {
      this.setState({ post: r.data.post });
      console.log(this.state.post);
    });
    console.log(this.state.post);
  }

  onChange = (ev) => {
    console.log(this.state.bloodGroup);
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  };
  handleClickOutside = evt => {
    evt.preventDefault()
    this.setState({isLoggedIn:false})
  };

  showLogin=(ev)=>{
    ev.preventDefault()
    this.setState({isLoggedIn:true})
  }
  render() {
    let post = this.state.post.map((r, k) => {
      return (
        <div>
          <Post key={k} data={r}></Post>
        </div>
      );
    });
    return (
      <div >
       
        <div>
          <div className="logbutton">
            <Button inverted color="violet" onClick={this.showLogin}>
              Login
            </Button>
            <Button inverted color="pink">
              Sign in
            </Button>
          </div>
        </div>
        <div >
         <CreatePost/>
        </div>
        <div className="modal" style={ this.state.isLoggedIn ? { display:'block'} : {display : 'none'} }>
          <LoginModal />
          <div className="close">
          <Button inverted color='red' onClick={(ev)=>{
            ev.preventDefault()
            this.setState({isLoggedIn:false})
          }}>
          Close
          </Button>
          </div>
        
        </div>
        <div className="feed">
          <ul>{post}</ul>
        </div>
      </div>
    );
  }
}

export default Newsfeed

