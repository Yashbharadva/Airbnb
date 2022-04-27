import React, { useState } from "react";

import './aguest-drop.styles.scss';

import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const AguestDrop = ({ selected1, setSelected1 }) => {
    const [active1, setActive1] = useState(false);

    const options1 = ['Entire place', 'Private room', 'Shared room']

    return (
        <div className="prefer">
            <div className="dropdownn">
                <div className="dropdown-btn" onClick={
                    () => { setActive1(!active1) }}>
                    Host your  {selected1}
                    {
                        active1 ? <BiChevronUp className="icon" size="0.5em"/> : <BiChevronDown className="icon" size="0.5em" />
                    
                    }
                </div>

                {active1 && (
                    <div className="drop-content">
                        {options1.map((option1) => (
                            <div className="droped-item" onClick={() => {
                                setSelected1(option1); setActive1(false)
                            }}> {option1}
                            </div>
                        ))}
                    </div>)}
            </div>
        </div>
    )
}


export default AguestDrop;