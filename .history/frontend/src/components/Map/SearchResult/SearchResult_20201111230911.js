import React from "react";

import "./search.css";

const SearchResult = (props) => {
  return props.map(function (d, idx) {
    <div style={{ backgroundColor: "black" }}>
      <p>
        {d.name} {d.location}
      </p>
      )
    </div>;
  });
};

export default SearchResult;
