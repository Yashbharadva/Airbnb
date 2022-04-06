import React from "react";

import './lower-footer.styles.scss';

import { AiOutlineCopyrightCircle } from 'react-icons/ai';

import { IoIosGlobe } from 'react-icons/io';

import { BiRupee } from 'react-icons/bi';

import { ImFacebook,ImTwitter,ImInstagram } from 'react-icons/im';

const Lower = () => {
    return(
        
        <div className="lower-footer">
            <div className="xyz">
            <AiOutlineCopyrightCircle size="1em" />
            </div>
                <h5>2022 Airbnb,Inc</h5>
                <li className="abc">
                <a href="/help/home?from=footer">
                Privacy
                </a>
                </li>
                <li className="abc">
                <a href="/help/home?from=footer">
                    Terms
                </a>
                </li>
                <li className="abc">
                <a href="/help/home?from=footer">
                    Sitemap
                </a>
                </li>
                <li className="abc">
                <a href="/help/home?from=footer">
                    Company
                </a>
                </li>
                <div className="language">
                    <IoIosGlobe size="1.5em"/>
                </div>
                <h5>English(IN)</h5>
                <div className="inr">
                    <BiRupee size="1.3em" />
                </div>
                <h5>INR</h5>
                <div className="facebook">
                    <ImFacebook size="1.3em" />
                </div>
                <div className="twitter">
                    <ImTwitter size="1.3em" />
                </div>
                <div className="instagram">
                    <ImInstagram size="1.3em" />
                </div>
                </div>
            

           
    )
}

export default Lower;