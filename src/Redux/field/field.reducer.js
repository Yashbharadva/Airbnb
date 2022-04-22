import FieldActionTypes from './field.types';


const INITIAL_STATE = {
    hidden8: true
};

const fieldReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FieldActionTypes.TOGGLE_FIELD_HIDDEN:
            return{
                ...state,
                hidden8: !state.hidden8
            }
            default:
                return state;
    }
};

export default fieldReducer; 