import React,{ useState } from 'react';
import './online-filter.styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-elastic-carousel';
import ONLINE_DATA_WEEK from "../../../online-data-week";
import OnlineWeekFetch from "../online-week-fetch/online-week-fetch.component";

const OnlineFilter = () => {
    const [items] = useState(ONLINE_DATA_WEEK);
    const breakPoints = [{
        width: 1, itemsToShow: 3
      }];
    return(
        <div className='dates-filters'>
            <div className='filter-date'>
                Dates
            </div>
            <div className='filter-groupsize'>
                Group size
            </div>
            <div className='more-filter'>
                More filters
            </div>
            <hr />
            
        <div className="online-week">
        <div className="spd">
                <Carousel breakPoints={breakPoints}>
                    {
                        items.map((item) => (<OnlineWeekFetch key={item.id} item={item} />))
                    }
                </Carousel>
            </div>
        </div>
        </div>
        
        
    )
}

export default OnlineFilter;