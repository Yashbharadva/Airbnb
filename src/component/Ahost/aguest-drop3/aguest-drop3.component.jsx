import React, { useState } from "react";

import './aguest-drop3.styles.scss';

import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const AguestDrop3 = ({ selected3, setSelected3 }) => {
    const [active3, setActive3] = useState(false);
    const options3 = ['Surat', 'Suratgarh', 'Surat Thani', 'Surathkal', 'Surat Thani Mueang']

    return (
        <div className="dropdownn3">
            <div className="earn-total">
                    and earn up to £ 120/month
                </div>
            <div className="dropdown-btn3" onClick={() => {
                setActive3(!active3)
            }}>
                in  {selected3} 
                {
                    active3 ? <BiChevronUp className="icon" size="0.5em"/> : <BiChevronDown className="icon" size="0.5em" />
                    
                }
                
            </div>

            {active3 && (
                <div className="drop-content3">
                    {options3.map((option3) => (
                        <div className="droped-item2" onClick={() => {
                            setSelected3(option3); setActive3(false)
                        }}> {option3}
                        </div>
                    ))}
                </div>)}
        </div>
    )
}

export default AguestDrop3;