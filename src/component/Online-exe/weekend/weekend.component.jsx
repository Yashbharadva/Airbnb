import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-elastic-carousel';
import TRIP_DATA from "../../../trip-data";
import TripFetch from "../trip-fetch/trip-fetch.component";

import './weekend.styles.scss';

const Weekend = () => {
    const [items] = useState(TRIP_DATA);
    const breakPoints = [{
        width: 1, itemsToShow: 6 , itemsToScroll:6
      }];
    return(
        <div className="new-trip">
            <div className="text-new-trip">    
            <h2>Make plans this weekend</h2>
            </div>
            <div className="weekend-trip">
                Show(665)
            </div>
            <div className="trip-fetch-new">
        <div className="trip-host">
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

export default Weekend;