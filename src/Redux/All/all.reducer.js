import AllActionTypes from './all.types';


const INITIAL_STATE = {
    hidden6: true, // calendar
    hidden2: true, // guest
    hidden4: true, // language
    hidden: true, // location
    hidden3: true // profile
};

const allReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AllActionTypes.TOGGLE_CALENDAR_HIDDEN:
            return {
                ...state,
                hidden6: !state.hidden6,
                hidden: true,
                hidden2: true,
                hidden3: true,
                hidden4: true,
            }
        case AllActionTypes.TOGGLE_GUEST_HIDDEN:
            return {
                ...state,
                hidden2: !state.hidden2,
                hidden: true,
                hidden6: true,
                hidden3: true,
                hidden4: true,
            }
        case AllActionTypes.TOGGLE_LANGUAGE_HIDDEN:
            return {
                ...state,
                hidden4: !state.hidden4,
                hidden: true,
                hidden2: true,
                hidden3: true,
                hidden6: true,
            }
        case AllActionTypes.TOGGLE_LOCATION_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
                hidden6: true,
                hidden4: true,
                hidden2: true,
                hidden3: true,
            }
        case AllActionTypes.TOGGLE_PROFILE_HIDDEN:
            return {
                ...state,
                hidden3: !state.hidden3,
                hidden: true,
                hidden2: true,
                hidden6: true,
                hidden4: true,
            }
        default:
            return state;
    }
};

export default allReducer; 