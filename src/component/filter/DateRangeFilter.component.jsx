import React, { useState } from "react";
import PropTypes from "prop-types";
import './DateRangeFilter.styles.scss';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { addDays, subDays } from "date-fns";
import Date from "../carousel/carousel.component";

const DateRangeFilter = ({ onChange }) => {
  const [index, setIndex] = useState(1);
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
    <div className="cal1">
      <div className="cal2">
        <div className="cal3" onClick={() => { setIndex(1) }} >
          <h4 className="cal4"> Calendar </h4>
        </div>
        <div className="cal5" onClick={() => { setIndex(2) }} >
          <h4 className="cal6"> I'm flexible </h4>
        </div>
      </div>
      <div className="main-calendar" hidden={index !== 1}>
        <div className="box6"> </div>
        {/* <DateRangePicker
          onChange={handleOnChange}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={state}
          direction="horizontal"
        /> */}
      </div>
       <div className="main-traas" hidden={index !== 2}>
        <div className="main-flex">
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
          <Date />
        </div>
      </div>
    </div>
  );
};

DateRangeFilter.propTypes = {
  onChange: PropTypes.func
};

export default DateRangeFilter;
