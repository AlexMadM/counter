import React, {useEffect, useState} from 'react';
import './App.css';
import Button from "./Button";
import SetCounter from "./SetCounter";

function AppOld() {

    const [count, setCount] = useState(+0)
    const [maxValue, setMaxValue] = useState(+5)
const [reset,setReset]= useState(true)

const resetsCounter=()=>{
        setReset(!reset)
}

    const LocalStorage = (start: number, max: number) => {
        setCount(start)
        setMaxValue(max)
        setReset(!reset)
    }


    const IncrementHandler = () => {
        if(count < maxValue){
            setCount(count + 1)
        }

    }


    const ResetHandler = () => {
        setCount(0)
    }

    const countNon = count === 0;
    const maxCount = count >= maxValue;


    return (
        <div className='input'>

            {reset ?
                <SetCounter  LocalStorage={LocalStorage}/>
                : <div className="App">

                <span className={count >= maxValue ? 'red' : ''}>
             {count === maxValue ? 'Wrong' : count}</span>
                    <div className='btn'>
                        <Button onClick={IncrementHandler} disabled={maxCount} name={'inc'}/>
                        <Button onClick={ResetHandler} disabled={countNon} name={'reset'}/>
                        <Button onClick={resetsCounter} name={'reset'}/>
                    </div>


                </div>}
        </div>

    );
}

export default AppOld;
