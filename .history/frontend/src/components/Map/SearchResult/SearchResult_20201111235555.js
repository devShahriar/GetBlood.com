import React from "react";

import "./search.css";
import { Card } from "semantic-ui-react";
const SearchResult = ({name , location}) => {
  return (
    <div className='card'>
   
  <h1>{name}</h1>
    </div>
  );
};

export default SearchResult;
