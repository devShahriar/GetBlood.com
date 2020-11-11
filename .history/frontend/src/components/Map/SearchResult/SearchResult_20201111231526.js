import React from "react";

import "./search.css";

const SearchResult = (props) => {

const list = props.result.map(r=>{
    console.log(r)
   return (
       <div>
           <p>{r.name}</p>
       </div>
   )
})

return (
<div className="card">
    {list}
</div>)
}

export default SearchResult;
