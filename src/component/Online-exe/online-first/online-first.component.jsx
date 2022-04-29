import React, { useState } from "react";
import Carousel from 'react-elastic-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ONLINE_FIRST_DATA from "../../../online-first-data";
import OnlineFirstFetch from "../online-first-fetch/online-first-fetch.component";
import './online-first.styles.scss';

const OnlineFirst = () => {
    const [items] = useState(ONLINE_FIRST_DATA);
    const breakPoints = [{
        width: 1, itemsToShow: 3
    }];
    return (
        <div className="imageforfirst">
            <div className="next-week">
            New this week
            </div>
            <div className="fetchfirst">
                <Carousel breakPoints={breakPoints}>
                    {
                        items.map((item) => (<OnlineFirstFetch key={item.id} item={item} />))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default OnlineFirst;

