import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-elastic-carousel';
import TOP_SELLER_DATA from "../../../top-seller-data";
import TripFetch from "../trip-fetch/trip-fetch.component";
import './top-seller.styles.scss';

const TopSeller = () => {
    const [items] = useState(TOP_SELLER_DATA);
    const breakPoints = [{
        width: 1, itemsToShow: 6 , itemsToScroll:6  
      }];
    return(
        <div className="new-trip">
            <div className="text-new-trip">    
            <h2>Top sellers</h2>
            </div>
            <div className="topper-seller-trip">
                Show(236)
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

export default TopSeller;