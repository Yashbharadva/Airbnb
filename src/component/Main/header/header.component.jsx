import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { SiAirbnb } from 'react-icons/si';

import { IoIosGlobe } from 'react-icons/io';

import { IoReorderThreeOutline } from 'react-icons/io5';

import { AiOutlineSearch } from 'react-icons/ai';

import { CgProfile } from 'react-icons/cg';

import { toggleProfileHidden } from '../../../Redux/All/all.actions';

import { toggleLanguageHidden } from '../../../Redux/All/all.actions';

import { connect } from 'react-redux';

import MainLanguage from "../../Main/main-language/main-language.component";


import "./header.styles.scss";



const Header2 = ({ hidden3, toggleProfileHidden, toggleLanguageHidden, hidden4 }) => {
    const [header1, setHeader1] = useState("header");
    const [modalOpen, setModalOpen] = useState(false)
    const listenScrollEvent = event => {
        if (window.scrollY < 73) {
            return setHeader1("header1");
        } else if (window.scrollY > 70) {
            return setHeader1("header2");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => window.removeEventListener("scroll", listenScrollEvent);
    }, []);

    return (
        <header className={header1}>
            
            <div className="logo">
                <a href="/">
                    <SiAirbnb size="1.3em" />airbnb
                </a></div>

            <div className="links">
                <Link className="link-item">Place to Stay</Link>
                <Link className="link-item">Experiences</Link>
                <Link className="link-item" to="/online-experience">
                    Online Experiences</Link>
                <Link className="input-search">
                <input className="search-animation"
                type="search"
                placeholder="Start your search" 
                ></input>
                <div className="search-logo-ani">
                <AiOutlineSearch/>
                </div>
                </Link>
            </div>
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
