import React from 'react';
import Counter from "../common/components/Counter";
import SetCounter from "../common/components/SetCounter";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "./store";
import {setsCount} from "../features/slice_counter";

const App = () => {
    const dispatch = useAppDispatch();
    const   setting =useSelector<AppRootStateType,boolean>(state => state.counter.settings)
    const sett=()=>{
        dispatch(setsCount({setting}))
    }
    return (
        <div>
            {setting ? <Counter setting={sett} /> : <SetCounter  setting={sett}/> }

        </div>
    );
};

export default App;