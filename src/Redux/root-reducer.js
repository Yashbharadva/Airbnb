import { combineReducers } from "redux";

import locationReducer from "./location/location.reducer";
import guestReducer from "./guest/guest.reducer";
import profileReducer from "./profile/profile.reducer";
import languageReducer from "./language/language.reducer";
import calendarReducer from "./calendar/calendar.reducer";
import calendar1Reducer from "./calendar1/calendar1.reducer";
import allReducer from "./All/all.reducer";
import fieldReducer from "./field/field.reducer";
import learnReducer from "./learn/learn.reducer";

export default combineReducers({
    location: locationReducer,
    guest: guestReducer,
    profile: profileReducer,
    language: languageReducer,
    calendar: calendarReducer,
    calendar1: calendar1Reducer,
    field: fieldReducer,
    learn: learnReducer,
    all: allReducer
});