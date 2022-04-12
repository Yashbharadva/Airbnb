import ProfileActionTypes from './profile.types';


const INITIAL_STATE = {
    hidden3: true
};

const profileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ProfileActionTypes.TOGGLE_PROFILE_HIDDEN:
            return{
                ...state,
                hidden3: !state.hidden3
            }
            default:
                return state;
    }
};

export default profileReducer; 