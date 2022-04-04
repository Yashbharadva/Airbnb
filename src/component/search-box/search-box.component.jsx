import React from "react";

import './search-box.styles.scss';



const SearchBox = () => {
    return (
        <div className="searchbox">
            <input type="search"
            placeholder="Start your search..." />
        </div>
    )
}

export default SearchBox;