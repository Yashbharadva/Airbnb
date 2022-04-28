import React, { useState } from "react";

import './potential.styles.scss';

const Potential = ({ setOpenModal }) => {
    return(
        <div className="main-potential">
            <button className="close" onClick={() => 
                {
                    setOpenModal(false)
            }}> X </button>
            <div className="title-potential">
                How we estimate your earning Potential
            </div>
            <div className="subtitle-potential">
                We make a few simple assumptions and calculations to determine your earnings:
            </div>
            <li>
                if you have an entire place, we assume you can host four guests. 
                if you're listing a private room, we count that as two guests,
                and for a shared room, just one guest. You can change your selections 
                in the drop-down menu at any time. 

            </li>
            <li>
            We take the median nightly price (before expenses, fees and taxes) based on booking data in your area from the last 12 months.
            </li>
            <li>
            We then multiply that price by the total number of occupied nights to get the monthly earnings estimate. To estimate the number of nights that you might host, we look at how often others in your area are hosting.
            </li>
            <div className="another">
            Keep in mind that these are just estimates. How much you actually earn depends on a number of other factors such as your availability, price, acceptance and cancellation rates, any legal restrictions and demand in your area.
            </div>
            <div className="learn">
            Also, your ability to host may depend on the local laws in your area. Learn more.
            </div>
        </div>
    )
}

export default Potential;