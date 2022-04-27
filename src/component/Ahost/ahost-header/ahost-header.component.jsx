import React, { useState, useEffect } from "react";

import { SiAirbnb } from 'react-icons/si';

import { BsChevronDown } from 'react-icons/bs';

import ReactPlayer from 'react-player';

import "./ahost-header.styles.scss";

const HeaderAhost = () => {
    
    const [header, setHeader] = useState("header");
    const [modalOpen, setModalOpen] = useState(false)
    const listenScrollEvent = event => {
        if (window.scrollY < 73) {
            return setHeader("header");
        } else if (window.scrollY > 70) {
            return setHeader("headerahost");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    return(
        <div className="main-ahost">
        <div className="headerahost">
            <div className="logoforahost">
                <a href="/" >
                    <SiAirbnb size='2em' color='white'/>
                </a>
            </div>
            <div className="titleahost">
                Hosting <br />
                makes Airbnb, <br />
                Airbnb
            
            <div className="buttonforahost">
                Try hosting
            </div>
            </div>
            <div className="video">
                <ReactPlayer 
                width='880px'
                height='880px'
                loop   
                controls   
                url='https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4'
                type="video/mp4">
                
                </ReactPlayer>
            </div>
            <div className="arrowahost">
            <BsChevronDown color="white"/>
            </div>
        </div>
        </div>
  
    )
}

export default HeaderAhost;