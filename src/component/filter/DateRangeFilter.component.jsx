import React, { useState } from "react";
import PropTypes from "prop-types";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { addDays, subDays } from "date-fns";
import './DateRangeFilter.styles.scss';
import Carousel from 'react-elastic-carousel';
import DATE_DATA from "../../datedata";
import DateScroll from "../Date-scroll/date-scroll.component";

const DateRangeFilter = ({ onChange }) => {
  const [items] = useState(DATE_DATA);
  const [index, setIndex] = useState(1);
  const breakPoints = [{
    width: 1, itemsToShow: 5
  }];
  const [state, setState] = useState([
    {
      startDate: subDays(new Date(), 7),
      endDate: addDays(new Date(), 1),
      key: "selection"
    }
  ]);

  const handleOnChange = ranges => {
    const { selection } = ranges;
    onChange(selection);
    setState([selection]);
  };

  return (
    <div className="maindaterange">
      <div className="main-tab">
        <div className="tab" onClick={() => { setIndex(1) }}>
          Calendar
        </div>
        <div className="tab2" onClick={() => { setIndex(2) }}>
          I'm flexible
        </div>
      </div>
      <div className="daterange">
        <div className="picker" hidden={index !== 1}>
          <DateRangePicker
            onChange={handleOnChange}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
          />
        </div>
      </div>
      <div className="picker1" hidden={index !== 2}>
        <div className="stay">
          How long would you like to stay?
        </div>
        <div className="days">
          <div className="weekend">
            Weekend
          </div>
          <div className="week">
            Week
          </div>
          <div className="month">
            Month
          </div>
        </div>
        <div className="want">
          When do you want to go?
        </div>
        <div className="carousel-data">
          <Carousel breakPoints={breakPoints}>
            {
              items.map((item) => (<DateScroll key={item.id} item={item} />))
            }
          </Carousel>
        </div>
      </div>
    </div>
  );
};

DateRangeFilter.propTypes = {
  onChange: PropTypes.func
};

export default DateRangeFilter;
