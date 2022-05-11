import React from "react";

import './experiences.styles.scss';

import Exe from "../exe/exe.component";
import { Link } from "react-router-dom";

const Experiences = () => {
    return (
        <div className="exe">
            <h1>Discover Airbnb Experiences</h1>
            <div className="ex">
                <div className="image1">
                <Exe
                    src="https://a0.muscache.com/im/pictures/b2f98185-f3bf-40db-ba8d-da0bceeccc65.jpg?im_w=720"
                    alt="" />
                    </div>
                <div className="container">
                    <h1>Things to do <br />
                        on your trip</h1>
                    <div className="button" to="experiences">
                        <h3>Experiences</h3>
                    </div>
                </div>
                <div className="image2">
                <Exe
                    src="https://a0.muscache.com/im/pictures/cae7ae9a-d069-4c6a-9267-795643472df1.jpg?im_w=720"
                    alt="" />
                    </div>
                <div className="containerr">
                    <h1>Things to do<br />
                        from home 
                        </h1>
                    <Link className="buttonn" to="/online-experience">
                        <h3>Online Experiences</h3>
                    </Link>
                </div>


            </div>

        </div>
    )
}

export default Experiences;