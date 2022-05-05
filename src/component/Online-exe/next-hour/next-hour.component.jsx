import React,{ useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-elastic-carousel';

import './next-hour.styles.scss';
import HourFetch from "../hour-fetch/hour-fetch.component";
import WEEKEND_DATA from "../../../weekend-data";


const NextHour = () => {
    const [items] = useState(WEEKEND_DATA);
    const breakPoints = [{
        width: 1, itemsToShow: 3, itemsToScroll:3
      }];
    return(
        <div className="next-hour">
            <div className="title-for-hour">
                Starting in the next 6 hours
                </div>
                <div className="trip-fetch-hour">
        <div className="trip-hour-host">
                <Carousel breakPoints={breakPoints}>
                    {
                        items.map((item) => (<HourFetch key={item.id} item={item} />))
                    }
                </Carousel>
            </div>
        </div>
        </div>
    )
}

export default NextHour;