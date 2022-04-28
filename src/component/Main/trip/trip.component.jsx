import React from "react";

import './trip.styles.scss';

const Trip = ({ src, title, description }) => {
    return (
        <div className="trip">
                <img src={src} alt='' />
                <div className="info">
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                </div>
            </div>
    )
}

export default Trip;