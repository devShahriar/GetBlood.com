import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import Axios from 'axios'
import { timeoutsShape } from 'shards-react';
import { findByLabelText } from '@testing-library/react';
import {Redirect} from 'react-router-dom'
import Map from './Map'
export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo:{},
            checked:false,
            blood_group:"",
            lang:"",
            long:""
        };
        this.state.token = localStorage.getItem("token")
        this.getUser();
       // this.style= this.style.bind(this);
    }  
    s = {
        display:"flex",
        height :"14px",
        width:"44px"

    }
    getUser() {
        const {user} = this.state;
        console.log("i am calld "+user+"")
        try {
            Axios({
              url: 'http://852c0463.ngrok.io/findBy/',
              method: 'post',
              data: {
                id:this.props.location.state.id
                
              }
            }).then(response => {
              console.log("i am from dashboard" +response);  
              
              this.setState({userInfo:{...response.data.userDetails[0]}})
            console.log("........"+this.state.userInfo);

            })
          } catch (err) {
            console.log('problem');
          }
    }
    
    getBank(){
        try{
            Axios({
                url: '',
                method: 'post',
                data: {
                  blood_group:blood_group
                  
                }
              }).then(response => {
                
                console.log(response)
               
              
  
              })
        }catch(e){

        }
    }
    
    render() {
        if(this.state.token===null){
            return <Redirect to="/login"/>
        }
        else{
            
            const { id ,name, email} = this.state.userInfo;
      
            return(
             
            <div >
                <Map cordinates={}></Map>
                
            </div>);
        }
      
    }
}