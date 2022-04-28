import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleFieldHidden, toggleLocationHidden } from '../../../Redux/All/all.actions';
import { toggleGuestHidden } from '../../../Redux/All/all.actions';
import { toggleCalendarHidden } from '../../../Redux/All/all.actions';
import { toggleCalendar1Hidden } from '../../../Redux/All/all.actions';
import { BsSearch } from 'react-icons/bs';
import 'react-calendar/dist/Calendar.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './search-box.styles.scss';

const SearchBox = ({ toggleLocationHidden, toggleGuestHidden, toggleCalendarHidden, toggleCalendar1Hidden, toggleFieldHidden }) => {
    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e) => {
        setDateState(e);
    }
    
    return (
        <div className="searchmain">
            <div className="searchbox">
                <div className='location-main-search'>
                <div className="location" onClick={toggleLocationHidden}>
                    <h4>Location</h4>
                    <div className='search-loc'>
                    <input 
                    type="search"
                    placeholder='Where are you going?' />
                    </div>
                    </div>
                </div>
                
                <div className="location1" onClick={toggleCalendarHidden}> 
                    <h4>Check in </h4>
                    <h5>Add dates</h5>
                </div>
                
                <div className="location2" onClick={toggleCalendar1Hidden}>
                    <h4>Check out </h4>
                    <h5>Add dates</h5>
                </div>

                <div className="location3" onClick={toggleGuestHidden}>
                    <h4>Guests</h4>
                    <h5>Add guests</h5>
                </div>
                <div className='search-icon' onClick={toggleFieldHidden}>   
                <BsSearch  color='black' size='1.8em'/>
                </div>
            </div>
            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleLocationHidden: () => dispatch(toggleLocationHidden()),
    toggleGuestHidden: () => dispatch(toggleGuestHidden()),
    toggleCalendarHidden: () => dispatch(toggleCalendarHidden()),
    toggleCalendar1Hidden: () => dispatch(toggleCalendar1Hidden()),
    toggleFieldHidden: () => dispatch(toggleFieldHidden())
})

export default connect(null, mapDispatchToProps)(SearchBox);