import GuestActionTypes from './guest.types';


const INITIAL_STATE = {
    hidden2: true
};

const guestReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GuestActionTypes.TOGGLE_GUEST_HIDDEN:
            return{
                ...state,
                hidden2: !state.hidden2
            }
            default:
                return state;
    }
};

export default guestReducer; 