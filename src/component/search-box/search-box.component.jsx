import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleLocationHidden } from '../../Redux/All/all.actions';
import { toggleGuestHidden } from '../../Redux/All/all.actions';
import { toggleCalendarHidden } from '../../Redux/All/all.actions';
import 'react-calendar/dist/Calendar.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './search-box.styles.scss';

const SearchBox = ({ toggleLocationHidden, toggleGuestHidden, toggleCalendarHidden }) => {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e);
    }
    
    return (
        <div className="searchmain">
            <div className="searchbox">
                <div className="location" onClick={toggleLocationHidden}>
                    <h4>Location</h4>
                    <h5>Where are you going?</h5>
                </div>
                
                <div className="location1" onClick={toggleCalendarHidden}> 
                    <h4>Check in </h4>
                    <h5>Add dates</h5>
                </div>
                
                <div className="location2" onClick={toggleCalendarHidden}>
                    <h4>Check out </h4>
                    <h5>Add dates</h5>
                </div>

                <div className="location3" onClick={toggleGuestHidden}>
                    <h4>Guests</h4>
                    <h5>Add guests</h5>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleLocationHidden: () => dispatch(toggleLocationHidden()),
    toggleGuestHidden: () => dispatch(toggleGuestHidden()),
    toggleCalendarHidden: () => dispatch(toggleCalendarHidden()),
})

export default connect(null, mapDispatchToProps)(SearchBox);