import LanguageActionTypes from './language.types';


const INITIAL_STATE = {
    hidden4: true
};

const languageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LanguageActionTypes.TOGGLE_LANGUAGE_HIDDEN:
            return{
                ...state,
                hidden4: !state.hidden4
            }
            default:
                return state;
    }
};

export default languageReducer; 