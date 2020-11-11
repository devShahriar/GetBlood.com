import React from "react";

import "./search.css";
import { Card } from "semantic-ui-react";
const SearchResult = (props) => {
  
    
    mapboxgl.accessToken =
    "pk.eyJ1Ijoic2h1ZGlwIiwiYSI6ImNrNjB3YjVqMzBibXAzbW55MTY0cjZxdG4ifQ.AQe8EIqNEjW0HyfDvf0tlQ";
   
    let directions=new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: "metric",
        profile: "mapbox/driving",
      });
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        directions.setOrigin([
          position.coords.longitude,
          position.coords.latitude,
        ]);
        directions.setDestination([d.longitude, d.latitude]);
      });
  return (
    <div className='card'>
   
      <h1>{props.result.name}</h1>
    </div>
  );
};

export default SearchResult;
