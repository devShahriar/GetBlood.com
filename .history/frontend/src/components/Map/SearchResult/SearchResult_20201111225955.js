import React from 'react'

import './search.css'

const SearchResult =({name , location })=>{
    return (
        <div style={{backgroundColor="black"}}>
        <p>
            {name} {location}
        </p>
       
       </div>
    
    )
    }

export default SearchResult