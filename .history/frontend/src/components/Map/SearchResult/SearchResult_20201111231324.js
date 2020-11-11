import React from "react";

import "./search.css";

const SearchResult = (props) => {

const list = props.result.map(r=>{
   return (
       <div>
           <p>{r.name}</p>
       </div>
   )
})

return (<div>
    {list}
</div>)
}

export default SearchResult;
