import { combineReducers, configureStore } from '@reduxjs/toolkit';
import msgReducer from './slice/msgSlice.ts';

const rootReducer = combineReducers({
    msg: msgReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
