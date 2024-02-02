import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {click} from "../features/slice_counter";
import {useDispatch} from "react-redux";
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
    counter: click,
});
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);


export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();


// export const store = configureStore({
//     reducer: {
//         counter:click,
//     }
// });


// store.subscribe(()=>{
//     saveState({
//         counter: store.getState().counter
//
//     });
//
// })

