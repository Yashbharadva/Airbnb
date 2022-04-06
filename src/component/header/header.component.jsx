import React from "react";
import './header.styles.scss';

import { IoIosGlobe } from 'react-icons/io';

import { CgProfile } from 'react-icons/cg';

const Header = () => {
    return (
        <div classname='header'>
            <div className="header_logo">
                <img src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt="yash" />

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
                    <IoIosGlobe size="1.5em"/>
                </div>
                <div className="profile">
                        <CgProfile size="1.5em" />
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Header;