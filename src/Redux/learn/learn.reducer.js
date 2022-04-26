import LearnActionTypes from './learn.types';


const INITIAL_STATE = {
    hidden9: true
};

const learnReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LearnActionTypes.TOGGLE_LEARN_HIDDEN:
            return{
                ...state,
                hidden9: !state.hidden9
            }
            default:
                return state;
    }
};

export default learnReducer; 