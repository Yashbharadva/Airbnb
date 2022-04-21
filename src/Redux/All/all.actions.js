import AllActionTypes from "./all.types";

export const toggleCalendarHidden = () => ({
    type: AllActionTypes.TOGGLE_CALENDAR_HIDDEN
});

export const toggleGuestHidden = () => ({
    type: AllActionTypes.TOGGLE_GUEST_HIDDEN
});

export const toggleLanguageHidden = () => ({
    type: AllActionTypes.TOGGLE_LANGUAGE_HIDDEN
});

export const toggleLocationHidden = () => ({
    type: AllActionTypes.TOGGLE_LOCATION_HIDDEN
});

export const toggleProfileHidden = () => ({
    type: AllActionTypes.TOGGLE_PROFILE_HIDDEN
});