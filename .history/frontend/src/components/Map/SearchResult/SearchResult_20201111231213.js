import React from "react";

import "./search.css";

const SearchResult = (props) => {

props.result.map(r=>{
   return (
       <div>
           <p>{r.name}</p>
       </div>
   )
})
}

export default SearchResult;
