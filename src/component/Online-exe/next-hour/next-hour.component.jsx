import React, { useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import './next-hour.styles.scss';
import { AiFillStar } from "react-icons/ai";
import { FiHeart } from 'react-icons/fi';


const NextHour = ({ item }) => {
    const { videourl, imageUrl, subtitle, subtext, title, price } = item;
    return (
        <div className="next-hour">
            <div className="all-in-one">
                <div className="video-image-hour">
                    <HoverVideoPlayer
                        videoSrc={`${videourl}`}
                        pausedOverlay={
                            <img src={`${imageUrl}`} />
                        } />
                </div>
                <div className="all-sub-text">
                    <div className="image-star">
                        <AiFillStar
                            color="red"
                            width="10px"
                            height="10px"
                        />
                    </div>
                    <div className="hour-text">
                        {subtitle}
                        {subtext}
                    </div>
                    <div className="heart-hour">
                        <FiHeart />
                    </div>
                    <div className="title-hour-trip">
                        {title}
                    </div>
                    <div className="price-hour-trip">
                        {price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NextHour;