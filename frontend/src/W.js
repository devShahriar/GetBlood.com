import React from "react";
import Webcam from "react-webcam";
import Axios from 'axios';
export default class WebCamera extends React.Component {
    state = {
        i : null
    }
    setRef = webcam => {
      this.webcam = webcam;
    };
  
    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      this.setState({ i : imageSrc})
      console.log(imageSrc);
    };
    send = () => {
       try{
        Axios({
            url: 'http://localhost:9000/saveImage/',
            method: 'post',
            data: {
             
              image: this.state.i
             
            }
          }).then(r=> { }).catch(e=>{})
       }
       catch(e ) {

       }
    }
  
    render() {
      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
  
      return (
        <div>
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
          <button onClick={this.capture}>Capture photo</button>
          <button onClick={this.send}>Capture photo</button>
        </div>
      );
    }
  }