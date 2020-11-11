import React from "react";

import "./search.css";
import { Card } from "semantic-ui-react";
const SearchResult = ({name , location}) => {
  return (
    <div>
      <Card header={name}></Card>
    </div>
  );
};

export default SearchResult;
