import React from "react";

import "./search.css";
import { Card } from "semantic-ui-react";
const SearchResult = ({name , location}) => {
  return (
    <div className="content">
    <Card
    link
    header='Rick Sanchez'
    meta='Scientist'
    description={[
      'Rick is a genius scientist whose alcoholism and reckless,',
      ' nihilistic behavior are a source of concern for his family.',
    ].join('')}
  />
    </div>
  );
};

export default SearchResult;
