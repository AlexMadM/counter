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
    const dispatch = useAppDispatch();

 const incrementHandler=()=>{
     dispatch(increment())
 }

    const decrementHandler=()=>{
        dispatch(decrement())
    }



    return (
        <div >
                    <span>{value}</span>
            <Button onClick={incrementHandler} name='inc' />
            <Button onClick={decrementHandler} name='dec' />
            <Button onClick={props.setting} name='set'/>

        </div>
    );
};

export default Counter;