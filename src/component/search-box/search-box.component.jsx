import React from "react";

import './search-box.styles.scss';



const SearchBox = () => {
    return (
        <div className="searchmain">
        <div className="searchbox">
            {/* <div className="location">Location </div><hr /> check-in <hr /> check-out <hr /> guests */}
            <div className="location"><h4>Location</h4> 
             <h5>Where are you going?</h5></div> <hr />
             <div className="location1"><h4>Check in </h4> 
             <h5>Add dates</h5></div> <hr />
             <div className="location2"><h4>Check out </h4> 
             <h5>Add dates</h5></div> <hr />
             <div className="location3"><h4>Guests</h4> 
             <h5>Add guests</h5></div> 
            {/* <div className="location"> Check in 
            <br /> Add dates</div> <hr />
            <div className="location"> Check out 
            <br /> Add dates</div> <hr />
            <div className="location"> Guests 
            <br /> Add guests</div> */}
        </div>
        
        </div>
        
    )
}

export default SearchBox;