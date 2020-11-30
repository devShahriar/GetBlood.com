import React, { useState } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
import ReactMapGL, { GeolocateControl, Marker, Popup } from "react-map-gl";
import { Button } from 'reactstrap';
import * as blood_bank from "./data/geo.json";
import { Redirect } from 'react-router';
import './map.css'
mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1ZGlwIiwiYSI6ImNrNjB3YjVqMzBibXAzbW55MTY0cjZxdG4ifQ.AQe8EIqNEjW0HyfDvf0tlQ'

export default class Map extends React.Component {
constructor(props){
  super(props)
//  alert(this.props.location.state.id);
  
  this.c = this.c.bind(this)
  this.state.token = localStorage.getItem("token")
  this.c()
}
 state = {
    
    directions: {},
    
  }
  c=(e)=>{
    
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


  ha = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
      this.directions.setOrigin([position.coords.longitude, position.coords.latitude]);
      this.directions.setDestination([90.415592, 23.739027]);
    })

  }

  render() {
   // if(this.state.token==null){
   //   return <Redirect to="/login"/>
   // }else{
      
    //  localStorage.removeItem("token")
      return (
        <div >
          <div style={{zIndex:'-1'}} ref={el => this.mapContainer = el}  style={{ position:"absolute", top:'0px',
    left:'0px',
    width: '70vw',
    height: '100vh'}}className="map" >
            <Button style={{zIndex:'1'}} outline color="danger" onClick={this.ha}>Get direction</Button>
          </div>
        </div>
        );
    //}
    
    
  }
}


