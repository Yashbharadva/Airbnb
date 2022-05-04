import React,{ useState } from "react";

import TripFetch from "../trip-fetch/trip-fetch.component";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-elastic-carousel';
import ONLINE_DATA_WEEK from "../../../online-data-week";

import './next-hour.styles.scss';


const NextHour = () => {
    const [items] = useState(ONLINE_DATA_WEEK);
    const breakPoints = [{
        width: 1, itemsToShow: 5
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
                        items.map((item) => (<TripFetch key={item.id} item={item} />))
                    }
                </Carousel>
            </div>
        </div>
        </div>
    )
}

export default NextHour;