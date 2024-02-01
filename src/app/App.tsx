import React, {useEffect} from 'react';
import Counter from "../common/components/Counter";
import SetCounter from "../common/components/SetCounter";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "./store";
import {load, setsCount} from "../features/slice_counter";
import s from './app.module.css'
import {loadState} from "./localStorage-utils";
const App = () => {
    useEffect(() => {
        dispatch(load(loadState()))
        console.log(loadState())
    }, []);
    const dispatch = useAppDispatch();
    const   setting =useSelector<AppRootStateType,boolean>(state => state.counter.settings)
    const sett=()=>{
        dispatch(setsCount({setting}))
    }
    return (
        <div className={s.app}>
            {setting ? <Counter setting={sett} /> : <SetCounter  setting={sett}/> }

        </div>
    );
};

export default App;