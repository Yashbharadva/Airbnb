import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import { SiAirbnb } from 'react-icons/si';

import { IoIosGlobe } from 'react-icons/io';

import { Link } from "react-router-dom";

import MainLanguage from "../../Main/main-language/main-language.component";

import { toggleProfileHidden } from "../../../Redux/All/all.actions";

import { toggleLanguageHidden } from "../../../Redux/All/all.actions";

import { IoReorderThreeOutline } from "react-icons/io5";

import { CgProfile } from "react-icons/cg";

import './online-header.styles.scss';

const OnlineHeader = ({ toggleLanguageHidden, toggleProfileHidden, hidden3 }) => {
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
        <div className="online-header">
            <div className="on-header">
                <header className={header}>
                    <div className="logo-online">
                        <a href="/">
                            <SiAirbnb size="1.3em" />airbnb
                        </a></div>

                    <div className="hosts-online">
                        <Link className="host-online" to="/Ahost">
                            Become a Host
                        </Link>
                        <div className="language-online" onClick={toggleLanguageHidden}>
                            <IoIosGlobe
                                size="1.5em" color="grey" />
                        </div>
                        {
                            modalOpen && <MainLanguage setOpenModal={setModalOpen} />
                        }
                        <div className="profile-line-online" onClick={toggleProfileHidden}>
                            <div className="three-line-online">
                                <IoReorderThreeOutline size="1.5em" color="grey" />
                            </div>
                            <div className="profile-online">
                                <CgProfile size="1.5em" color="grey" />
                            </div>
                        </div>
                    </div>
                    <div className="box3-online" onClick={toggleProfileHidden} >
                        {
                            hidden3 ? null :
                                (<div className="box5-online">

                                    <div className="profile-online">
                                        <div className="profile1-online"><h4>Sign Up</h4></div>
                                        <div className="profile2-online"><h4>Log in</h4></div> <hr />
                                        <div className="profile3-online"><h4>Host your home</h4></div>
                                        <div className="profile4-online"><h4>Host an exprience</h4></div>
                                        <div className="profile5-online"><h4>Help</h4></div>
                                    </div>

                                </div>)
                        }
                    </div>
                </header>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleProfileHidden: () => dispatch(toggleProfileHidden()),
    toggleLanguageHidden: () => dispatch(toggleLanguageHidden())
})


const mapStateToProps = ({ profile: { hidden3 }, language: { hidden4 } }) => ({
    hidden3, hidden4
});

export default connect(mapStateToProps, mapDispatchToProps)(OnlineHeader);