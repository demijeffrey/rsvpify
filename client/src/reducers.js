import { combineReducers } from "redux"
import usersReducer from "./features/users/userSlice"
import eventsReducer from "./features/events/eventSlice"
import invitationsReducer from "./features/invitations/invitationSlice"
import guestsReducer from "./features/guests/guestSlice"

const rootReducer = combineReducers({
    user: usersReducer,
    events: eventsReducer,
    invitations: invitationsReducer,
    guests: guestsReducer,
})

export default rootReducer