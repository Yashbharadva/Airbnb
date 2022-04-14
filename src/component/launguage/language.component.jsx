import React from "react";

import './language.styles.scss';

const Language = ({ item }) => {
    const { title, subtitle } = item;
    return(
        <div className="language">
            <div className="language-info">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
            </div>
        </div>
    )
}

export default Language;