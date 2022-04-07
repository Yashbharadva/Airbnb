import React from "react";
import './header.styles.scss';

import './header.js';

import { IoIosGlobe } from 'react-icons/io';

import { CgProfile } from 'react-icons/cg';

import { SiAirbnb } from 'react-icons/si';

const Header = () => {
    return (
        <div classname='header'>
             <div className="abc">
                </div>
            <div className="header_logo">
               
                <div className="text">
                    airbnb</div>
                    <div className="logo">
                <SiAirbnb size="2em"/>
                
                </div>
                
   
                <div className="options">
                    <div className="option" to="/place to stay">
                        Place to Stay
                    </div>
                    <div className="option" to="/experiences">
                        Experiences
                    </div>
                    <div className="option" to="/online experiences">
                        Online Experiences
                    </div>
                </div>
                <div className="hosts">
                    <div className="host" to="/become a host">
                        Become a Host
                    </div>

                    <div className="language">
                    <IoIosGlobe size="1.5em" color="white"/>
                </div>
                <div className="profile">
                        <CgProfile size="1.5em" color="white" />
                        </div>
                    </div>
            </div>
            </div>
    )
}
export default Header;