import React from "react";

import './trip-fetch.styles.scss';

import { AiFillStar } from 'react-icons/ai';

import HoverVideoPlayer from 'react-hover-video-player';

const TripFetch = ({ item }) => {
    const { videourl, imageUrl, subtitle, subtext, title, price } = item;
    return (
        <div className="trip-fetch">
            <div className="video-fetch">
                <HoverVideoPlayer
                    videoSrc={`${videourl}`}
                    alt="mp4/video"
                    pausedOverlay={
                    <img src={`${imageUrl}`}
                    />}
                ></HoverVideoPlayer>
            </div>
            <div className="image-sub-title">
                <AiFillStar color="red" />
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