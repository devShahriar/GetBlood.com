import React from "react";

import "./search.css";

const SearchResult = (props) => {
 props.map(function (d, idx) {
    return ( <div style={{ backgroundColor: "black" }}>
      <p>
        {d.name} {d.location}
      </p>
      )
    </div>
  })
};

export default SearchResult;
