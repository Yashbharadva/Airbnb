import React, { useState } from "react";

import './aguest-drop.styles.scss';

import { BiChevronDown } from 'react-icons/bi';

const AguestDrop = ({ selected, setSelected, selectedd, setSelectedd }) => {
    const [active, setActive] = useState(false);
    const options = ['Entire place', 'Private room', 'Shared room']
    const [active1, setActive1] = useState(false);
    const options1 = ['1 guest', '2 guests', '3 guests', '4 guests', '5 guests', '6 guests', '7 guests', '8 guests', '9 guests', '10 guests', '11 guests', '12 guests', '13 guests', '14 guests', '15 guests', '16 guests']
    const [active2, setActive2] = useState(false);
    const options2 = ['']

    return (
        <div className="prefer">
            <div className="dropdownn">
                <div className="dropdown-btn" onClick={
                    () => { setActive(!active) }}>
                    Host your  {selected} <BiChevronDown />
                </div>

                {active && (
                    <div className="drop-content">
                        {options.map((option) => (
                            <div className="droped-item" onClick={() => {
                                setSelected(option); setActive(false)
                            }}> {option}
                            </div>
                        ))}
                    </div>)}
            </div>




            <div className="dropdownn2">
                <div className="dropdown-btn2" onClick={
                    () => { setActive1(!active1) }}>
                    for  {selectedd} <BiChevronDown />
                </div>

                {active1 && (
                    <div className="drop-content2">
                        {options1.map((option1) => (
                            <div className="droped-item2" onClick={() => {
                                setSelectedd(option1); setActive1(false)
                            }}> {option1}
                            </div>
                        ))}
                    </div>)}
            </div>



            <div className="dropdownn3">
                <div className="dropdown-btn2" onClick={
                    () => { setActive2(!active2) }}>
                    for  {selectedd} <BiChevronDown />
                </div>

                {active2 && (
                    <div className="drop-content2">
                        {options1.map((option1) => (
                            <div className="droped-item2" onClick={() => {
                                setSelectedd(option1); setActive2(false)
                            }}> {option1}
                            </div>
                        ))}
                    </div>)}
            </div>
        </div>
    )
}


export default AguestDrop;