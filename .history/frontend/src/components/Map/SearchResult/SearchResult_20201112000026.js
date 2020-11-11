import React from "react";

import "./search.css";
import { Card } from "semantic-ui-react";
const SearchResult = (props) => {
  console.log(props.result.name)  
  return (
    <div className='card'>
   
      <h1>{props.result.name}</h1>
    </div>
  );
};

export default SearchResult;
