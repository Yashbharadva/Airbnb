import React, { useState, useEffect } from "react";

import { SiAirbnb } from 'react-icons/si';

import './ahost-header2.styles.scss';

const AhostHeader2 = () => {
    const [header3, setHeader] = useState("header");
    const listenScrollEvent = event => {
        if (window.scrollY > 1000) {
            return setHeader("header3");
        } else if (window.scrollY < 900) {
            return setHeader("headerahost2");
        }
    };

  

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    return (
        <header className={header3}>
        <div className="ahostheader2">
            <div className="headerahost2">
                <div className="logoforahost">
                    <a href="/" >
                        <SiAirbnb size='2em' />
                    </a>
                    <div className="tryhosting">
                    Try hosting
                </div>
                </div>
                <div className="main-pic-text">
                <div className="pic-text">
                    <div className="pic" >
                        <img src ="https://a0.muscache.com/im/pictures/c131fb36-f46a-464f-ad2f-087ebf88078d.jpg"
                        width='30px'
                        alt="1st-pic" />
                    </div>
                    <div className="pic1" >
                        <img src ="	https://a0.muscache.com/im/pictures/3ddc6e92-e2fd-4cdc-a460-2f1d7d5365ae.jpg"
                        width='30px'
                        alt="1st-pic" />
                    </div>
                    <div className="pic2" >
                        <img src ="https://a0.muscache.com/im/pictures/ba6627db-1aa4-4f7f-9f18-5be3d3470037.jpg"
                        width='30px'
                        alt="1st-pic" />
                    </div>
                    <div className="text-pic">
                    Ask a Superhost
                    </div>
                </div>
                </div>
            </div>
        </div>
        </header>
    )
}

export default AhostHeader2;