import React from 'react';
import { connect } from 'react-redux';
import { toggleLocationHidden } from '../../Redux/location/location.actions';
import { toggleGuestHidden } from '../../Redux/guest/guest.actions';
import './search-box.styles.scss';

const SearchBox = ({ toggleLocationHidden, toggleGuestHidden }) => {
    return (
        <div className="searchmain">
            <div className="searchbox">
                <div className="location" onClick={toggleLocationHidden}>
                    <h4>Location</h4>
                    <h5>Where are you going?</h5>
                </div>

                <div className="location1"><h4>Check in </h4>
                    <h5>Add dates</h5>
                </div>

                <div className="location2"><h4>Check out </h4>
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
    
})

export default connect(null, mapDispatchToProps)(SearchBox);