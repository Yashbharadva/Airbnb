import { combineReducers } from "redux";

import locationReducer from "./location/location.reducer";

import guestReducer from "./guest/guest.reducer";
import profileReducer from "./profile/profile.reducer";
import languageReducer from "./language/language.reducer";
import calendarReducer from "./calendar/calendar.reducer";

export default combineReducers({
    location: locationReducer,
    guest: guestReducer,
    profile: profileReducer,
    language: languageReducer,
    calendar: calendarReducer
});