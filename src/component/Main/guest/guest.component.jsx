import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import './guest.styles.scss';

const Guest = () => {
    const [quatity, setQuantity] = useState(0);
    const [quatity1, setQuantity1] = useState(0);
    const [quatity2, setQuantity2] = useState(0);
    const [quatity3, setQuantity3] = useState(0);

    const handleDecrement = () => {
        if (quatity > 0) {
            setQuantity(prevCount => prevCount - 1);
        }
    }
    const handleIncrement = () => {
        setQuantity(prevCount => prevCount + 1);
    }



    const handleDecrement1 = () => {
        if (quatity1 > 0) {
            setQuantity1(prevCount => prevCount - 1);
        }
    }

    const handleIncrement1 = () => {
        setQuantity1(prevCount => prevCount + 1);
    }


    const handleDecrement2 = () => {
        if (quatity2 > 0) {
            setQuantity2(prevCount => prevCount - 1);
        }
    }
    const handleIncrement2 = () => {
        setQuantity2(prevCount => prevCount + 1);
    }



    const handleDecrement3 = () => {
        if (quatity3 > 0) {
            setQuantity3(prevCount => prevCount - 1);
        }
    }
    const handleIncrement3 = () => {
        setQuantity3(prevCount => prevCount + 1);
    }




    return (
        <div className="guest">
            <div className="box2">
                <div className="main-age">
                    <div className="adults">Adults</div>
                    <div className="adults-age">Ages 13 or above</div>
                    <div className="arrow1" onClick={handleDecrement}> <AiOutlineMinusCircle /></div>
                    <div className="value">{quatity}</div>
                    <div className="arrow2" onClick={handleIncrement}><AiOutlinePlusCircle /></div>
                </div>
                <div className="child">
                    <div className="children">Children</div>
                    <div className="child-age">Ages 2-12</div>
                    <div className="arrow1" onClick={handleDecrement1}> <AiOutlineMinusCircle /></div>
                    <div className="value">{quatity1}</div>
                    <div className="arrow2" onClick={handleIncrement1}><AiOutlinePlusCircle /></div>
                </div>
                <div className="main-infants">
                    <div className="infants">Infants</div>
                    <div className="child-age">Under 2</div>
                    <div className="arrow1" onClick={handleDecrement2}> <AiOutlineMinusCircle /></div>
                    <div className="value">{quatity2}</div>
                    <div className="arrow2" onClick={handleIncrement2}><AiOutlinePlusCircle /></div>
                </div>
                <div className="main-pets">
                    <div className="pets">Pets</div>
                    <Link className="animal" to="/">
                        Bringing a service animal?
                    </Link>
                    <div className="arrow1" onClick={handleDecrement3}> <AiOutlineMinusCircle /></div>
                    <div className="value">{quatity3}</div>
                    <div className="arrow2" onClick={handleIncrement3}><AiOutlinePlusCircle /></div>
                </div>
                <div className="notice">
                    If you're lucky enough to have more than 2 pets with you, be sure to let your host know.
                </div>
            </div>

        </div>
    )
}

export default Guest;