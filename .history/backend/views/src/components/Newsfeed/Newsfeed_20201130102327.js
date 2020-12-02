import React, { useEffect, useState } from "react";
import Axios from "axios";
import Post from "./Post/Post";
import PropTypes from 'prop-types';
import MyVerticallyCenteredModal from '../Signup/signup'
import "./newfeed.css";
import { Button, Segment } from "semantic-ui-react";
import LoginModal from "../Login/LoginModal";
import flash from "react-animations/lib/flash";
class Newsfeed extends React.Component {
  state = {
    post: [],
    isLoggedIn:false,
    showSignup:false
  };
   
  constructor(props) {
    super(props);
    let isLoggedIn=false;
    this.state = {
      post: [],
      isLoggedIn:false

    };
    
  }
  componentDidMount() {
    
    
  
    Axios.get("http://localhost:9000/feed").then((r) => {
      this.setState({ post: r.data.post });
      console.log(this.state.post);
    });
    console.log(this.state.post);
  }

  
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
      <div className='feedwrap'>
        <div className="feedwrap navbar" >
          <div className="feedwrap logbutton" >
            
            <Button inverted color="violet" onClick={this.showLogin}>
              Login
            </Button>
           
           
            <Button inverted color="pink" onClick={()=>{
              this.setState({showSignup:true})
            }}>
              Sign in
            </Button>
            
          </div>
        </div>
        <div className="feedwrap modal" style={ this.state.isLoggedIn ? { display:'block'} : {display : 'none'} }>
          <LoginModal />
          <div className="feedwrap close">
          <Button inverted color='red' onClick={(ev)=>{
            ev.preventDefault()
            this.setState({isLoggedIn:false})
          }}>
          Close
          </Button>
          </div>
       
        </div>
        <div>
        <MyVerticallyCenteredModal
                show={this.state.showSignup}
                onHide={() => {
                  this.setState({ showSignup: false });
                }}
              />
        </div>
        <div className="feed" >
          <ul>{post}</ul>
        </div>
      
        
      </div>
    );
  }
}

export default Newsfeed

