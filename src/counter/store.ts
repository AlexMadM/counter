import {counterReducer} from "./counter-reducer";
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";

import {thunk} from 'redux-thunk'
import {loadState, saveState} from "./localStorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer

})
// непосредственно создаём store
export const store = legacy_createStore(rootReducer,loadState(),applyMiddleware(thunk));

store.subscribe(()=>{
    saveState({
        counter: store.getState().counter
    });

})
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;