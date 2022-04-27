import React from "react";

import './superhost.styles.scss';

const Superhost = () => {
    return(
        <div className="superhost">
            <div className="superhost-img">
                <img src="https://a0.muscache.com/im/pictures/93ef1829-62d1-4349-8b4a-b02ebc650a25.jpg?im_w=2560&im_q=highq"
                alt="superhost-image" />
                <div className="text">
                    <h1>Questions about hosting?<br />
                    Ask a Superhost. </h1>
                    </div>
                    <div className="button">
                        Learn more
                    </div>
                    
            </div>
        </div>
    )
}

export default Superhost;