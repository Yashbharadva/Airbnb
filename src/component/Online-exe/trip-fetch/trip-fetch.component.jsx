import React from "react";

import './trip-fetch.styles.scss';

import {AiFillStar} from 'react-icons/ai';

const TripFetch = ({ item }) => {
    const { videourl, subtitle, subtext, title, price } = item;
    return(
        <div className="trip-fetch">
            <div className="video-fetch">
            <video src={`${videourl}`} alt="mp4/video" 
            className="clip"
            controls
            />
            </div>
            <div className="image-sub-title">
            <AiFillStar color="red"/>
                </div>
                <div className="title-text">
                {subtitle}
                {subtext}
                </div>
                <div className="title-trip">
                {title}
            </div>
            <div className="price-trip">
                {price}
            </div>
        </div>
        
    )
}

export default TripFetch;