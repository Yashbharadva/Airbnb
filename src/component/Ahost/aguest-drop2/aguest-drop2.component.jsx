import React, { useState } from "react";

import './aguest-drop2.styles.scss';

import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const AguestDrop2 = ({ selected2, setSelected2 }) => {
    const [active2, setActive2] = useState(false);
    const options2 = ['1 guest', '2 guests', '3 guests', '4 guests', '5 guests', '6 guests', '7 guests', '8 guests', '9 guests', '10 guests', '11 guests', '12 guests', '13 guests', '14 guests', '15 guests', '16 guests']

    return (
        <div className="dropdownn2">
            <div className="dropdown-btn2" onClick={() => {
                setActive2(!active2)
            }}>
                for  {selected2} 
                {
                        active2 ? <BiChevronUp className="icon" size="0.5em"/> : <BiChevronDown className="icon" size="0.5em" />
                    
                }
            </div>

            {active2 && (
                <div className="drop-content2">
                    {options2.map((option2) => (
                        <div className="droped-item2" onClick={() => {
                            setSelected2(option2); setActive2(false)
                        }}> {option2}
                        </div>
                    ))}
                </div>)}
        </div>
    )
}

export default AguestDrop2;