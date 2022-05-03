import React from "react";

import './online-first-fetch.styles.scss';

const OnlineFirstFetch = ({ item }) => {
    const { title, imageUrl, subtitle, button } = item;
    return (
        <div className="first-scroll">
            <div className="first-scroll-image">
                <img src={`${imageUrl}`} alt="scroll" />
                <div className="firstsubtitleforscroll">
                    {subtitle}
                    <div className="firsttitleforscroll">
                        {title}

                        <div className="firstbuttonforscroll">
                            {button}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default OnlineFirstFetch;