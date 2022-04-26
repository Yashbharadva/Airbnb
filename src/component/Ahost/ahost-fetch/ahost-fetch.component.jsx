import React from "react";

import './ahost-fetch.styles.scss';

const AhostScroll = ({ item }) => {
    const { title, image, subtitle, place } = item;
    return(
    <div className="ahost-scroll">
        <div className="ahost-scroll-image">
            <img src={`${image}`} alt="scroll" />
        </div>
        <div className="ahosttitleforscroll">
            {title}
            </div>
            <div className="ahostsubtitleforscroll">
                <img src={`${subtitle}`} alt="name" />
            </div>
            <div className="ahostplaceforscroll">
                {place}
            </div>
        </div>
    
    )
}

export default AhostScroll;