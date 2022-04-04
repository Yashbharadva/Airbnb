import React from "react";

import './trip.styles.scss';

const Trip = () => {
    return(
        <div className="trip">
            <h1>Inspiration for your next trip</h1>
            <img src="https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=320"
            alt='' />
            <img src="https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=320"
            alt='' />
            <img src="https://a0.muscache.com/im/pictures/99eb5993-4277-4c1e-8db1-b639a96758a0.jpg?im_w=320"
            alt='' />
            <img src="https://a0.muscache.com/im/pictures/3836379f-169d-4259-8c08-a6cb50461903.jpg?im_w=320"
            alt='' />
            <div className="box-trip">
            <h2>Lonavala</h2>
                <h3>66 Kilometres away</h3>
            </div>
            <div className="box-tripp"></div>
            
            
        </div>
    )
}

export default Trip;