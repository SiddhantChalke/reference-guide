import { createStore } from "redux";
import combiner from "./reducers/combiner";
// import cntReducer from "./reducers/cntReducer";


const store = createStore(combiner);
export default store;