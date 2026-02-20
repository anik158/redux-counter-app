// import {createStore} from 'redux';
//
// const initialState = {
//     count: 0
// }
//
//
// const countReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 ...state, count: state.count + 1
//             };
//         case 'DECREMENT':
//             return {
//                 ...state, count: state.count - 1
//             }
//             default:
//                 return state;
//     }
// };
//
//
// const store = createStore(countReducer);

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    counter: counterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
export const persistor = persistStore(store);