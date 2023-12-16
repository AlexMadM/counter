import React, {ChangeEvent, useEffect, useState} from 'react';
import Button from "./Button";

type props ={
    LocalStorage:(start:number,max:number)=>void
}

const SetCounter = (props:props) => {


    const [start, setStart] = useState(0);
    const [max, setMax] = useState(0);


    useEffect(()=>{
        let nextMax = localStorage.getItem('max')
        if (nextMax) {
            let newMax = JSON.parse(nextMax)
            setMax(newMax)
        }
         let startCount = localStorage.getItem('start')
         if (startCount) {
            let newStart = JSON.parse(startCount)
            setStart(newStart)}
    },[])

    useEffect(()=>{
        localStorage.setItem('start', JSON.stringify(start))
        localStorage.setItem('max', JSON.stringify(max))

    },[start,max])


    const setHandler = () => {
       props.LocalStorage(start,max)
    }

    const maxValue=(e:ChangeEvent<HTMLInputElement>)=>{
        setMax(parseInt(e.target.value))
    }
    const startValue =(e:ChangeEvent<HTMLInputElement>)=>{
        setStart(parseInt(e.target.value))
    }


    return (
        <div>
            <p>

                <label>max value: </label>
                <input list='value' onChange={maxValue} type="number" value={max}
                       step="1"/>
            </p>
            <p>
                <label>start value: </label>
                <input list='value' onChange={startValue} type="number" value={start}
                       step="1"/>
            </p>

            <Button onClick={setHandler} name={'set'} disabled={start < 0 || max < 0 || start===max || max<start}/>
        </div>
    );
};

export default SetCounter;