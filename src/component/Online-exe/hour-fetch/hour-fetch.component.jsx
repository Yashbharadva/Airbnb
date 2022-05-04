import React from "react";

import './hour-fetch.styles.scss';
import HoverVideoPlayer from "react-hover-video-player/dist/component/HoverVideoPlayer";


const HourFetch = () => {
    return(
        <div className="hour-fetch">
            <div className="video-hour-fetch">
                <HoverVideoPlayer
                    videoSrc={`${videourl}`}
                    alt="mp4/video"
                    pausedOverlay={
                    <img src={`${imageUrl}`}
                    />}
                ></HoverVideoPlayer>
            </div>
            <div className="image-hour-title">
                <AiFillStar color="red" />
            </div>
            <div className="title-hour-text">
                {subtitle}
                {subtext}
            </div>
            <div className="title-hour-trip">
                {title}
            </div>
            <div className="price-hour-trip">
                {price}
            </div>
        </div>

    )
}

export default HourFetch;