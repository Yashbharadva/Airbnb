import React from "react";

import './search-box.styles.scss';



const SearchBox = () => {
    return (
        <div className="searchmain">
        <div className="searchbox">
            <input type="search"
            placeholder="Start your search..." />
        </div>
        
        </div>
        
    )
}

export default SearchBox;