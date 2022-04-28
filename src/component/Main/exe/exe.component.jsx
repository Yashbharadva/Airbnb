import React from "react";

import './exe.styles.scss';

const Exe = ({ src }) => {
    return(
        <div className="exep">
            <img src={src} alt="" />
            <div className="exeinfo">
            </div>
        </div>
    )
}

export default Exe;