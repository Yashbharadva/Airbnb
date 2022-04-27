import React from "react";

import ReactPlayer from "react-player";

import './ahost-footer.styles.scss';

const Ahostfooter = () => {
    return (
        <div className="ahost-footer">
            <div className="footertext">
                Try hosting on<br />
                Airbnb
            </div>
            <div className="join">
                Join us. We'll help you every<br />
                step of the way.
            </div>
            <div className="button">
                Let's go
            </div>
            <div className="video">
                <ReactPlayer
                    width='980px'
                    height='928px'
                    loop
                    controls
                    url="https://a0.muscache.com/v/9a/7a/9a7ad4a1-cfab-5f7d-96e6-fda8abceabe7/9a7ad4a1cfab5f7d96e6fda8abceabe7_4000k_1.mp4"
                    type="video/mp4">

                </ReactPlayer>
            </div>
        </div>

    )
}

export default Ahostfooter;