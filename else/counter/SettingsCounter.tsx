import React, {ChangeEvent, useState} from 'react';
import style from "./Settings.module.css";
import {Button, TextField} from "@mui/material";
import {CountType} from "./counter-reducer";


type SetCountProps={
    count:CountType
    set:(maxValue:number,startValue:number)=>void

}


const SettingsCounter = (props:SetCountProps) => {


    const [maxValue,setMaxValue]=useState(props.count.maxValue)
    const [startValue, setStartValue] = useState(props.count.count);

    const maxValueInputChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setMaxValue(+e.currentTarget.value);
    }

    const startValueInputChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setStartValue(+e.currentTarget.value)
    }

   const setButtonHandler=()=>{
       props.set(maxValue,startValue)
   }


  const isChanged=()=>{
     if (maxValue <= startValue || maxValue<=0 ) {
         return true;
     }
 }

    return (
        <div className={style.counter}>
            <div className={startValue>= maxValue ? style.error : ''}>

                <TextField variant="outlined" type="number" label={'max-value'} value={maxValue}
                           onChange={maxValueInputChangeHandler}

                />
                <TextField variant="outlined" type="number" label={'start-value'} value={startValue}

                           onChange={startValueInputChangeHandler}/>
            </div>

            <div className={style['button-box']}>
                <Button variant="contained" onClick={setButtonHandler}
                        disabled={isChanged()}
                >set</Button>
            </div>
        </div>
    );
};

export default SettingsCounter;