import React from 'react';
import {useSelector} from "react-redux";

import {AppRootStateType, useAppDispatch} from "../../app/store";
import Button from "./Button";
import {decrement, increment, setsCount} from "../../features/slice_counter";
type Props={
    setting:()=>void
}
const Counter = (props:Props) => {

 const   value =useSelector<AppRootStateType,number>(state => state.counter.value)
    const maxValue=useSelector<AppRootStateType,number>(state => state.counter.maxValue)
    const dispatch = useAppDispatch();

 const incrementHandler=()=>{
     dispatch(increment())
 }

    const decrementHandler=()=>{
        dispatch(decrement())
    }
    const isChanged = () => {
        if (maxValue <= value || maxValue <= 0) {
            return true;
        }
    }


    return (
        <div >
                    <span>{value}</span>
            <Button onClick={incrementHandler} disabled={isChanged()} name='inc' />
            <Button onClick={decrementHandler} disabled={value<=0} name='dec' />
            <Button onClick={props.setting} name='set'/>

        </div>
    );
};

export default Counter;