import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { SiAirbnb } from 'react-icons/si';

import { IoIosGlobe } from 'react-icons/io';

import { IoReorderThreeOutline } from 'react-icons/io5';

import { CgProfile } from 'react-icons/cg';

import { toggleProfileHidden } from '../../../Redux/All/all.actions';

import { toggleLanguageHidden } from '../../../Redux/All/all.actions';

import { connect } from 'react-redux';

import MainLanguage from "../../Main/main-language/main-language.component";


import "./header.styles.scss";

const Header2 = ({ hidden3, toggleProfileHidden, toggleLanguageHidden, hidden4 }) => {
    const [header, setHeader] = useState("header");
    const [modalOpen, setModalOpen] = useState(false)
    const listenScrollEvent = event => {
        if (window.scrollY < 73) {
            return setHeader("header");
        } else if (window.scrollY > 70) {
            return setHeader("header2");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    return (
        <header className={header}>
            <div className="logo">
                <a href="/">
                    <SiAirbnb size="1.3em" />airbnb
                </a></div>

            <ul className="links">
                <div className="link-item">Place to Stay</div>
                <div className="link-item">Experiences</div>
                <Link className="link-item" to="/online-experience">Online Experiences</Link>
            </ul>
            <div className="hosts">
                <Link className="host" to="/Ahost">
                    Become a Host
                </Link>
                <div className="language" onClick={toggleLanguageHidden}>
                    <IoIosGlobe
                      size="1.5em" color="grey" />
                </div>
                {
                        modalOpen && <MainLanguage setOpenModal={setModalOpen} />
                    }
                <div className="profile-line" onClick={toggleProfileHidden}>
                    <div className="three-line">
                        <IoReorderThreeOutline size="1.5em" color="grey" />
                    </div>
                    <div className="profile">
                        <CgProfile size="1.5em" color="grey" />
                    </div>
                </div>
            </div>
            <div className="box3" onClick={toggleProfileHidden} >
                {
                    hidden3 ? null :
                        (<div className="box5">

                            <div className="profile">
                                <div className="profile1"><h4>Sign Up</h4></div>
                                <div className="profile2"><h4>Log in</h4></div> <hr />
                                <div className="profile3"><h4>Host your home</h4></div>
                                <div className="profile4"><h4>Host an exprience</h4></div>
                                <div className="profile5"><h4>Help</h4></div>
                            </div>

                        </div>)
                }
            </div>
        </header>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleProfileHidden: () => dispatch(toggleProfileHidden()),
    toggleLanguageHidden: () => dispatch(toggleLanguageHidden())
})


const mapStateToProps = ({ profile: { hidden3 }, language: { hidden4 } }) => ({
    hidden3, hidden4
});

export default connect(mapStateToProps, mapDispatchToProps)(Header2);
