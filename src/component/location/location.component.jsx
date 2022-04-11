import React from "react";

import './location.styles.scss';

const Locate = ({ item }) => {
    const { title, imageUrl, subtitle } = item;
    return(
        <div className="data">
            <div className="locate-image">
            <img src={`${imageUrl}`} alt="profile" />
            </div>
            <div className="titleforimage">
                {title}
                <div className="subtitle">
                {subtitle}
            </div>
            </div>
            
        </div>
    )
}

export default Locate;