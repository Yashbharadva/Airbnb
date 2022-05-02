import React from "react";

import './online-week-fetch.styles.scss';

const OnlineWeekFetch = ({ item }) => {
    const { title } = item;
    return(
    <div className="online-week-fetch">
        <div className="week-fetch-title">
            {title}
            </div>
        </div>
    
    )
}

export default OnlineWeekFetch;