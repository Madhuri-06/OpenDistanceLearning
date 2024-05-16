import { combineReducers } from "redux";
import authReducer from "./Redux/auth/authReducer";
import courseReducer from "./Redux/course/courseReducer";


const rootReducer=combineReducers({
    auth: authReducer,
    course: courseReducer,
})

export default rootReducer