import React, {useEffect, useState} from 'react';
import './App.css';
import Button from "./Button";
import SetCounter from "./SetCounter";
import {useDispatch, useSelector} from "react-redux";
import {CountType, incrementAC, resetHandlerAC} from "./counter-reducer";
import {AppRootStateType} from "./store";

type stateType ={
    initialState: number
}

function AppWithRedux() {



    // const [count, setCount] = useState(0)
    // const [maxValue, setMaxValue] = useState(5)
    const [reset,setReset]= useState(true)

const count = useSelector<AppRootStateType,CountType>((state)=>state.counter);

    const dispatch = useDispatch();
    const resetsCounter=()=>{
        setReset(!reset)
    }

    const LocalStorage = (start: number, max: number) => {
        // setCount(start)
        // setMaxValue(max)
        setReset(!reset)
    }


    const IncrementHandler = () => {
        const action =incrementAC()
        dispatch(action)

    }


    const ResetHandler = () => {
        const action = resetHandlerAC()
        dispatch(action)
    }

    const countNon = count.count === 0;
    const maxCount = count.count >= count.maxValue;


    return (
        <div className='input'>

            {reset ?
                <SetCounter  LocalStorage={LocalStorage}/>
                : <div className="App">

                <span className={count.count >= count.maxValue ? 'red' : ''}>
             {count.count === count.maxValue ? 'Wrong' : count.count}</span>
                    <div className='btn'>
                        <Button onClick={IncrementHandler} disabled={maxCount} name={'inc'}/>
                        <Button onClick={ResetHandler} disabled={countNon} name={'reset'}/>
                        <Button onClick={resetsCounter} name={'reset'}/>
                    </div>


                </div>}
        </div>

    );
}

export default AppWithRedux;
