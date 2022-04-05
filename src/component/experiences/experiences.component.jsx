import React from "react";

import './experiences.styles.scss';

import Exe from "../exe/exe.component";

const Experiences = () => {
    return (
        <div className="exe">
            <h1>Discover Airbnb Experiences</h1>
            <div className="ex">
                <Exe
                    src="https://a0.muscache.com/im/pictures/b2f98185-f3bf-40db-ba8d-da0bceeccc65.jpg?im_w=720"
                    alt="" />
                <div className="container">
                    <h1>Things to do on your trip</h1>
                    <div className="button">
                        <h3>Experiences</h3>
                    </div>
                </div>
                <Exe
                    src="https://a0.muscache.com/im/pictures/cae7ae9a-d069-4c6a-9267-795643472df1.jpg?im_w=720"
                    alt="" />
                <div className="containerr">
                    <h1>Things to do from home</h1>
                    <div className="buttonn">
                        <h3>Online Experiences</h3>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Experiences;