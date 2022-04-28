// import React, { useState } from "react";
// import DATE_DATA from "../../datedata";
// import Carousel from 'react-elastic-carousel';
import './carousel.styles.scss';
// import DateScroll from "../Date-scroll/date-scroll.component";

const Date = () => {
    // const [items] = useState(DATE_DATA);
    // const breakPoints = [{
    //     width: 1, itemsToShow: 2
    // }];
    return(
        <div className="date-data">
            {/* <Carousel breakPoints={breakPoints}>
                {
                    items.map((item)=> (<DateScroll key={item.id} item={item} />))
                }
            </Carousel> */}
        </div>
    )
};

export default Date;