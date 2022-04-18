import CalendarActionTypes from './calendar.types';


const INITIAL_STATE = {
    hidden6: true
};

const calendarReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CalendarActionTypes.TOGGLE_CALENDAR_HIDDEN:
            return{
                ...state,
                hidden6: !state.hidden6
            }
            default:
                return state;
    }
};

export default calendarReducer; 