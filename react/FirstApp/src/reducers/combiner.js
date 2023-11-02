import { combineReducers } from "redux";
import cntReducer from "./cntReducer";

const combiner = combineReducers({
    cntReducer,
})
export default combiner