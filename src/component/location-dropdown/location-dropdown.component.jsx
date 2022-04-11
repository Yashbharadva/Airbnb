import React from "react";

import { useState } from "react";

import './location-dropdown.styles.scss';

import LOCATION_DATA from "../../locationdata";

import Locate from "../location/location.component";

import {AiOutlineRight} from 'react-icons/ai';

const Locationdrop = () => {
    const [locationdata] = useState(LOCATION_DATA);
    return(
    <div className="location-dropdown">
    <div className="box1">
        <div className="anywhere"> Go anywhere, anytime</div>
        <div className="location-button"> 
            I'm flexible 
            <div className="aero"> <AiOutlineRight /> </div>
        </div>
        <div className="near">
            GETAWAYS NEAR YOU
        </div>
        {
            locationdata.map((item) => (<Locate key={item.id} item={item} />))
        }
    </div>
</div>
    )
 }

export default Locationdrop;