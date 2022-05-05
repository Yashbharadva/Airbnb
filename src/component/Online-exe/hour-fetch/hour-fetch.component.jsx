import React, { useState } from "react";
import WEEKEND_DATA from "../../../weekend-data";
import Carousel from 'react-elastic-carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextHour from "../next-hour/next-hour.component";
import './hour-fetch.styles.scss';

const FetchHourCom = () => {
    const [items] = useState(WEEKEND_DATA);
    const breakPoints = [{
        dots: false,
        width: 1, itemsToShow: 3 , itemsToScroll:3
    }]
    return(
        <div className="hour-fetch">
            <div className="title-for-hour">
                Starting in the next 6 hours
            </div>
            <div className="data-hour">
                <Carousel breakPoints={breakPoints}>
                    {
                        items.map((item) => (<NextHour key={item.id} item={item} />))
                    }
                </Carousel>

            </div>
        </div>
    )
}

export default FetchHourCom;