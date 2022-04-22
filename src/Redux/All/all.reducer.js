import AllActionTypes from './all.types';


const INITIAL_STATE = {
    hidden6: true, // calendar
    hidden7: true, // calendar1
    hidden2: true, // guest
    hidden4: true, // language
    hidden: true, // location
    hidden3: true, // profile
    hidden8: true // search
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
                hidden7: true,
                hidden8: true
            }
        case AllActionTypes.TOGGLE_CALENDAR1_HIDDEN:
            return {
                ...state,
                hidden7: !state.hidden7,
                hidden: true,
                hidden2: true,
                hidden3: true,
                hidden4: true,
                hidden6: true,
                hidden8: true
            }
        case AllActionTypes.TOGGLE_GUEST_HIDDEN:
            return {
                ...state,
                hidden2: !state.hidden2,
                hidden: true,
                hidden6: true,
                hidden3: true,
                hidden4: true,
                hidden7: true,
                hidden8: true
            }
        case AllActionTypes.TOGGLE_LANGUAGE_HIDDEN:
            return {
                ...state,
                hidden4: !state.hidden4,
                hidden: true,
                hidden2: true,
                hidden3: true,
                hidden6: true,
                hidden7: true,
                hidden8: true
            }
        case AllActionTypes.TOGGLE_LOCATION_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
                hidden6: true,
                hidden4: true,
                hidden2: true,
                hidden3: true,
                hidden7: true,
                hidden8: true
            }
        case AllActionTypes.TOGGLE_PROFILE_HIDDEN:
            return {
                ...state,
                hidden3: !state.hidden3,
                hidden: true,
                hidden2: true,
                hidden6: true,
                hidden4: true,
                hidden7: true,
                hidden8: true
            }
        case AllActionTypes.TOGGLE_FIELD_HIDDEN:
            return {
                ...state,
                hidden8: !state.hidden8,
                hidden: true,
                hidden2: true,
                hidden3: true,
                hidden6: true,
                hidden4: true,
                hidden7: true,
            }
        default:
            return state;
    }
};

export default allReducer; 