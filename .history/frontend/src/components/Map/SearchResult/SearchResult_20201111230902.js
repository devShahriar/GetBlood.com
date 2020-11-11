import React from "react";

import "./search.css";

const SearchResult = (props) => {
  return props.map(function (d, idx) {
    <div style={{ backgroundColor: "black" }}>
      <p>
        {r.name} {r.location}
      </p>
      )
    </div>;
  });
};

export default SearchResult;
