import React from 'react'

import './search.css'

const SearchResult =(props)=>{
    return (
        <div style={{backgroundColor:"black"}}>
         props.map(function(r,idx){
              <p>
               {r.name} {r.location}
           </p>
         }
        )   
      
       
       </div>
    
    )
    }

export default SearchResult