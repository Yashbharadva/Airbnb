import React from "react";

import './online-first-fetch.styles.scss';

const OnlineFirstFetch = ({ item }) => {
    const { title, imageUrl, subtitle, button } = item;
    return (
        <div className="first-scroll">
            <div className="first-scroll-image">
                <img src={`${imageUrl}`} alt="scroll" />
            </div>
            <div className="firstsubtitleforscroll">
                {subtitle}
                <div className="firsttitleforscroll">
                    {title}
                    <div className="firstplaceforscroll">
                        {button}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OnlineFirstFetch;