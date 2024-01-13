import React, {useEffect, useState} from 'react';
import SettingsCounter from "./SettingsCounter";

import Count from "./Count";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {
    CountType, incrementAC,

    resetHandlerAC,
    setHandlerAc,

} from "./counter-reducer";
import style from "./Counter.module.css";


const MyCounter = () => {
    const [set,setReset]= useState(true)


    const count = useSelector<AppRootStateType,CountType>((state)=>state.counter);



    const dispatch = useDispatch();
    useEffect(()=>{
        // dispatch(setValueFromLocalStorage())
    },[])
    const IncrementHandler=()=>{
      dispatch(incrementAC())

     }

    const ResetHandler = () => {
        const action = resetHandlerAC()
        dispatch(action)
    }

        const SetHandler=(maxValue:number,startValue:number)=>{
            dispatch(setHandlerAc(maxValue,startValue))
            setReset(!set)
        }

    return (
        <div className={style.counter}>
            {set ? <SettingsCounter  set={SetHandler} count={count}/>
                :
                <Count setReset={setReset}  reset={ResetHandler} increment={IncrementHandler} count={count}/>}
        </div>
    );
};

export default MyCounter;