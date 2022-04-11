import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import './guest.styles.scss';

const Guest = ({ quatity }) => {
    return (
        <div className="guest">
            <div className="box2">
                <div className="main-age">
                    <div className="adults">Adults</div>
                    <div className="adults-age">Ages 13 or above</div>
                    <div className="arrow1"> <AiOutlineMinusCircle /></div>
                    <div className="value">{quatity = 0}</div>
                    <div className="arrow2"><AiOutlinePlusCircle /></div>
                </div> 
                <div className="child">
                    <div className="children">Children</div>
                    <div className="child-age">Ages 2-12</div>
                    <div className="arrow1"> <AiOutlineMinusCircle /></div>
                    <div className="value">{quatity = 0}</div>
                    <div className="arrow2"><AiOutlinePlusCircle /></div>
                </div>
                <div className="main-infants">
                    <div className="infants">Infants</div>
                    <div className="child-age">Under 2</div>
                    <div className="arrow1"> <AiOutlineMinusCircle /></div>
                    <div className="value">{quatity = 0}</div>
                    <div className="arrow2"><AiOutlinePlusCircle /></div>
                </div>
                <div className="main-pets">
                    <div className="pets">Pets</div>
                    <Link className="animal" to="/">
                        Bringing a service animal?
                    </Link>
                    <div className="arrow1"> <AiOutlineMinusCircle /></div>
                    <div className="value">{quatity = 0}</div>
                    <div className="arrow2"><AiOutlinePlusCircle /></div>
                </div>
                <div className="notice">
                    If you're lucky enough to have more than 2 pets with you, be sure to let your host know.
                </div>
            </div>
        </div>
    )
}

export default Guest;