import React from 'react';
import Locationdrop from '../location-dropdown/location-dropdown.component';
// import { connect } from 'react-redux';
// import { toggleLocationHidden } from '../../Redux/location.actions';
import './search-box.styles.scss';

const SearchBox = () => {
    return (
        <div className="searchmain">
            <div className="searchbox">
                <div className="location"><h4>Location</h4>
                    <h5>Where are you going?</h5> <Locationdrop />
                </div> 
                <div className="location1"><h4>Check in </h4>
                    <h5>Add dates</h5></div> 
                <div className="location2"><h4>Check out </h4>
                    <h5>Add dates</h5></div> 
                <div className="location3"><h4>Guests</h4>
                    <h5>Add guests</h5></div>
            </div>

        </div>

    )
}

export default SearchBox;

// const mapDispatchToProps = dispatch => ({
//     toggleLocationHidden:() => dispatch(toggleLocationHidden())
// })

// export default connect(null,mapDispatchToProps)(SearchBox);