import React from "react";

import "./search.css";
import {Card} from 'semantic-ui-react'
const SearchResult = (props) => {

const list = props.result.map(r=>{
    console.log(r)
   return (
      <Card
      header={r.name}
      >

      </Card>
   )
})

return (
<div className="content">
    {list}
</div>)
}

export default SearchResult;
