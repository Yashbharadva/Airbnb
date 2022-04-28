import React from "react";

import './date-scroll.styles.scss';

const DateScroll = ({ item }) => {
    const { title, imageUrl, subtitle } = item;
    return(
    <div className="date-scroll">
        <div className="scroll-image">
            <img src={`${imageUrl}`} alt="scroll" />
        </div>
        <div className="titleforscroll">
            {title}
            <div className="subtitleforscroll">
                {subtitle}
            </div>
        </div>
    </div>
    )
}

export default DateScroll;