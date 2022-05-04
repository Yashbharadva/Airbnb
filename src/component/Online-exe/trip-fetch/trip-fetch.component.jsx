import React from "react";

import './trip-fetch.styles.scss';

import {AiFillStar} from 'react-icons/ai';

import HoverVideoPlayer from 'react-hover-video-player';

const TripFetch = ({ item }) => {
    const { videourl, subtitle, subtext, title, price } = item;
    return(
        <div className="trip-fetch">
            <div className="video-fetch">
            <HoverVideoPlayer 
            videoSrc={`${videourl}`} 
            alt="mp4/video" 
            pausedOverlay={
                <img src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1718920-media_library/original/ca228931-6da0-4f13-96ec-a4079eaeb6c1.jpg?im_w=480"
                alt=""
                style={
                    {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',                 
                    }
                } />
            }
            className="clip"
            controls
            ></HoverVideoPlayer>
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