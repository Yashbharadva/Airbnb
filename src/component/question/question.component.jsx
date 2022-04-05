import React from "react";

import './question.styles.scss';

const Question = () => {
    return(
        <div className="que">
            <img src="https://a0.muscache.com/im/pictures/cca24f3f-8f66-4e9d-98d8-dd5cda8911eb.jpg?im_w=1200"
            alt="" />
            <div className="container">
                <h1>Questions about hosting..??</h1>
                <div className="button">
                    <h3>Ask a Superhost</h3>
                </div>
            </div>
        </div>
    )
}

export default Question;