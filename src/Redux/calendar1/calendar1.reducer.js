import Calendar1ActionTypes from './calendar1.types';


const INITIAL_STATE = {
    hidden7: true
};

const calendar1Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Calendar1ActionTypes.TOGGLE_CALENDAR1_HIDDEN:
            return{
                ...state,
                hidden7: !state.hidden7
            }
            default:
                return state;
    }
};

export default calendar1Reducer; 