import React, { useState } from "react";
import './header.styles.scss';

import './header.js';

import { toggleProfileHidden } from "../../Redux/profile/profile.actions";

import { connect } from "react-redux";

import { IoIosGlobe } from 'react-icons/io';

import { CgProfile } from 'react-icons/cg';

import { SiAirbnb } from 'react-icons/si';

import { IoReorderThreeOutline } from 'react-icons/io5';

import 'react-date-range/dist/styles.css';



const Header = ( { hidden3, toggleProfileHidden })  => {
    const [navheader, setHeader] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 90) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    return (
        <nav className={navheader ? 'navheader.active' : 'navheader'}>
            <div classname='header'>
                <div className="abc">
                </div>
                <div className="header_logo">

                    <div className="text">
                        airbnb</div>
                    <div className="logo">
                        <SiAirbnb size="2em" />

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
                            <IoIosGlobe size="1.5em" color="white" />
                        </div>
                        <div className="profile-line" onClick={toggleProfileHidden}>
                            <div className="three-line">
                                <IoReorderThreeOutline size="1.5em" color="grey" />
                            </div>
                            <div className="profile">
                                <CgProfile size="1.5em" color="grey" />
                            </div>

                        </div>
                    </div>
                    {
                        hidden3 ? null : 
                     (<div className="box3">
                        <div className="profile">
                            <div className="profile1"><h4>Sign Up</h4></div>
                            <div className="profile2"><h4>Log in</h4></div> <hr />
                            <div className="profile3"><h4>Host your home</h4></div>
                            <div className="profile4"><h4>Host an exprience</h4></div>
                            <div className="profile5"><h4>Help</h4></div>
                        </div>
                    </div>)}
                </div>
            </div>
        </nav>
    )
}


const mapDispatchToProps = dispatch => ({
    toggleProfileHidden: () => dispatch(toggleProfileHidden())
})


const mapStateToProps = ({  profile: {hidden3} }) => ({
    hidden3
  });

export default connect(mapStateToProps,mapDispatchToProps)(Header);

