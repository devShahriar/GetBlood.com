import React from "react";

import "./search.css";
import { Card } from "semantic-ui-react";
const SearchResult = (props) => {
  console.log(props.name)  
  return (
    <div className='card'>
   
      <h1>{props.name}</h1>
    </div>
  );
};

export default SearchResult;
