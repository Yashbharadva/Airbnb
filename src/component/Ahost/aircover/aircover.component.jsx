import React from "react";

import './aircover.styles.scss';

const Aircover = () => {
    return(
        <div className="aircover">
            <div className="cover">
                <img src="https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg?im_w=2560&im_q=highq"
                alt='cover-img' />
            </div>
            <div className="cover2">
                <img src="https://a0.muscache.com/im/pictures/dcf1804b-dd84-46e2-8b56-0c19fd3680af.jpg"
                alt='cover-img2' />
                <div className="ptext">
                <p>Top-to-bottom protection.<br />
                Always included, always free.<br />
                Only on Airbnb.</p>
                </div>
                <div className="button">
                        Learn more
                    </div>
            </div>
            
        </div>
    )
}

export default Aircover;