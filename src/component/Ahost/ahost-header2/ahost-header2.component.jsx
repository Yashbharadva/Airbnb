import React, { useState, useEffect } from "react";

import { SiAirbnb } from 'react-icons/si';

import './ahost-header2.styles.scss';

const AhostHeader2 = () => {
    const [header3, setHeader] = useState("header");
    const listenScrollEvent = event => {
        if (window.scrollY > 900) {
            return setHeader("header3");
        } else if (window.scrollY < 500) {
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
                    Try Button
                </div>
                </div>
                
            </div>
        </div>
        </header>
    )
}

export default AhostHeader2;