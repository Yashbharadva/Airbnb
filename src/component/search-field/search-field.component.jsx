import React from "react";
import { AiOutlineRight } from 'react-icons/ai';
import './search-field.styles.scss';

const SearchField = () => {
    return (
        <div className="search-field">
            <div className="field">
                <div className="anywhere"> Go anywhere, anytime</div>
                <div className="location-button">
                    I'm flexible
                    <div className="aero"> <AiOutlineRight /> </div>
                </div>
            </div>
        </div>
    )
}

export default SearchField;