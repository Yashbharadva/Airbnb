import React from "react";

import { Link } from 'react-router-dom';


import './footer.styles.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <h4>Support</h4>
                <div className="abc">
                    <Link className="efg" to="/">
                        Help Center
                    </Link> </div>
                <div className="abc">
                    <Link className="efg" to="/">
                        Safety information
                    </Link> </div>
                <div className="abc">
                    <Link className="efg" to="/">
                        Cancellation options
                    </Link> </div>
                <div className="abc">
                    <Link className="efg" to="/">
                        Our COVID-19 Response
                    </Link></div>
                <div className="abc">
                    <Link className="efg" to="/">
                        Supporting people with disabilities
                    </Link> </div>
                <div className="abc">
                    <Link className="efg" to="/">
                        Report a neighbourhood concern
                    </Link></div>
            </div>
            <div className="container">
                <h4>Community</h4>
                <div className="abc">
                    <Link className="efg" to="/">
                        Airbnb.org: disaster relief housing
                    </Link> </div>
                <div className="abc">
                    <Link className="efg" to="/">
                        Support Afghan refugees
                    </Link> </div>
                <div className="abc">
                    <Link className="efg" to="/">
                        Combating discrimination
                    </Link> </div>
            </div>
            <div className="container">
                <h4>Hosting</h4>
                <div className="abc">
                    <Link className="efg" to="/">
                        Try hosting
                    </Link></div>
                <div className="abc">
                    <Link className="efg" to="/">
                        AirCover: protection for Hosts
                    </Link></div>
                <div className="abc">
                    <Link className="efg" to="/">
                        Explore hosting resources
                    </Link></div>
                <div className="abc">
                    <Link className="efg" to="/">
                        Visit our community forum

                    </Link> </div>
                <div className="abc">
                    <Link className="efg" to="/">
                        How to host responsibly
                    </Link></div>
            </div>
            <div className="container">
                <h4>About</h4>
                <div className="abc">
                    <Link className="efg" to="/">
                        Newsroom
                    </Link> </div>
                <div className="abc">
                    <Link className="efg" to="/">
                        Learn about new features
                    </Link></div>
                <div className="abc">
                    <Link className="efg" to="/">
                        Letter from our founders
                    </Link> </div>
                <div className="abc">
                    <Link className="efg" to="/">
                        Careers
                    </Link> </div>
                <div className="abc">
                    <Link className="efg" to="/">
                        Investors
                    </Link> </div>
                <div className="abc">
                    <Link className="efg" to="/">
                        Airbnb Luxe
                    </Link> </div>
            </div>
        </div>
    )
}

export default Footer;