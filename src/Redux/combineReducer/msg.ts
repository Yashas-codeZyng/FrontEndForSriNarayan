import { combineReducers, configureStore } from "@reduxjs/toolkit";
import msgReducer from "../slice/msgSlice"

const rootReducer = combineReducers({
    msg: msgReducer,

});
const store = configureStore({
    reducer: rootReducer,
});
export default store;