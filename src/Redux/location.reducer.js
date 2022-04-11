import LocationActionTypes from './location.types';


const INITIAL_STATE = {
    hidden: true
};

const locationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LocationActionTypes.TOGGLE_LOCATION_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
            default:
                return state;
    }
}

export default locationReducer; 