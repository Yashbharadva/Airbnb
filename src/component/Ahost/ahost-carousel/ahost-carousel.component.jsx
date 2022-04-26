import React, { useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import './ahost-carousel.styles.scss';
import AhostScroll from "../ahost-fetch/ahost-fetch.component";
import Carousel from 'react-elastic-carousel';
import HOST_DATA from "../../../hostdata";

const HostCarousel = () => {
    const [items] = useState(HOST_DATA);
    const breakPoints = [{
        width: 1, itemsToShow: 3
      }];
    return (
        
            <div className="imageforslide">
                <div className="fetch">
                    <Carousel breakPoints={breakPoints}>
                        {
                            items.map((item) => (<AhostScroll key={item.id} item={item} />))
                        }
                    </Carousel>
                </div>
            </div>
    )

}

export default HostCarousel;