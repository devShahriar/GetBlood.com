import React, { useState } from 'react';
import './App.css';
import Axios from 'axios'
import { Card, Icon, Image ,Input, Button,Form, Label, Divider} from 'semantic-ui-react'
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import ReactMapGL, { GeolocateControl, Marker, Popup } from "react-map-gl";

import * as blood_bank from "./data/geo.json";
import { Redirect } from 'react-router';
import './map.css'
mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1ZGlwIiwiYSI6ImNrNjB3YjVqMzBibXAzbW55MTY0cjZxdG4ifQ.AQe8EIqNEjW0HyfDvf0tlQ'

export default class Map extends React.Component {
constructor(props){
  super(props)
//  alert(this.props.location.state.id);
let latitude =null
let logitude =null
  this.state = {
    
    directions: {},
    bloodGroup:"",
    latitude,
    logitude,
    res:[]
  }
  this.c = this.c.bind(this)
  this.state.token = localStorage.getItem("token")
  this.c()
  this.getBank = this.getBank.bind(this)
  
 
  console.log(this.props.latitude)
}
 
  onChange = (ev) => {
    console.log(this.state.bloodGroup)
   this.setState({
     [ev.target.name]:ev.target.value
   })
 }
  getBank=(ev)=>{
    ev.preventDefault()
     this.state.result=true;
     console.log('result' + this.state.result)
     const {bloodGroup} =this.state
      try{
          Axios({
              url: 'http://localhost:9000/getBlood',
              method: 'post',
              data: {
                blood_group:bloodGroup
                
              }
            }).then(response => {
           
             this.setState({res:response.data.result})
              
           
            

          }).bind(this)
      }catch(e){

      }
  }
  c=(log,lan)=>{
    
    navigator.geolocation.getCurrentPosition(position => {
       const lat = position.coords.latitude;
       const lng = position.coords.longitude;
      
        this.map = new mapboxgl.Map({
        container: this.mapContainer, // See https://blog.mapbox.com/mapbox-gl-js-react-764da6cc074a
        style: 'mapbox://styles/mapbox/streets-v11?optimize=true',
        center: [lng, lat],
        zoom:15
      });
    this.map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        })
      );
      this.directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving'
      });
  
      this.map.addControl(this.directions, 'top-right')
    }) 
  }


  

  render() {
   // if(this.state.token==null){
   //   return <Redirect to="/login"/>
   // }else{
      
    //  localStorage.removeItem("token")
    const res =this.state.res
    
    let list = res.map(function(d,idx){
 
    return (
       <div  className="content" onClick={()=> {
        let directions = new MapboxDirections({
          accessToken: mapboxgl.accessToken,
          unit: 'metric',
          profile: 'mapbox/driving'
        });
    
        
        navigator.geolocation.getCurrentPosition(position => {
          console.log(position)
          directions.setOrigin([position.coords.longitude, position.coords.latitude]);
          directions.setDestination([d.longitude,d.latitude]);
        })
    
      }}>
            {d.name}
            {idx}
            <Divider/>
       </div>
       
      )
    })
      return (
        <div >
            <div className="search">
            <Form.Field >
            <input type="text" 
            placeholder="bloodGroup" 
            name="bloodGroup" 
            value={this.state.bloodGroup}
            onChange={this.onChange} 
            autoFocus/>
            </Form.Field>
               <Button  inverted color="pink" onClick={this.getBank}>search</Button>
              <div>
              {list}
 
              </div>
            </div>
          <div  ref={el => this.mapContainer = el} className="mapContainer" />
        </div>
        );
    //}
    
    
  }
}


