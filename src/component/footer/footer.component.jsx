import React from "react";

import { Link } from 'react-router-dom';

import './footer.styles.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container1">
                <h4>Support</h4>
                
            </div>
            <div className="container2">
                <h4>Community</h4>
            </div>
            <div className="container3">
                <h4>Hosting</h4>
            </div>
            <div className="container4">
                <h4>About</h4>
            </div>
        </div>
    )
}

export default Footer;