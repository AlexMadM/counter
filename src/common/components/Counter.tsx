import React from 'react';
import {useSelector} from "react-redux";

import {AppRootStateType, useAppDispatch} from "../../app/store";
import Button from "./Button";
import {decrement, increment} from "../../features/slice_counter";

const Counter = () => {

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
            <Button onClick={} name='set'/>

        </div>
    );
};

export default Counter;