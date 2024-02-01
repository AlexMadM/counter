import React, {ChangeEvent, useState} from 'react';
import Button from "./Button";
import {TextField} from "@mui/material";
import {settings} from "../../features/slice_counter";
import {useAppDispatch} from "../../app/store";

type Props = {
    setting: () => void
}
const SetCounter = (props: Props) => {
    const dispatch = useAppDispatch();
    const [maxValue, setMaxValue] = useState(0)
    const [minValue, setminValue] = useState(0);
    const maxValueInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value);
    }

    const startValueInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setminValue(+e.currentTarget.value)
    }

    const isChanged = () => {
        if (maxValue <= minValue || maxValue <= 0) {
            return true;
        }
    }
const settingsCounter=()=>{
        dispatch(settings({minValue,maxValue}))
    props.setting()
}

    return (
        <div>
            <div>
                <TextField variant="outlined" type="number" label={'max-value'} value={maxValue}
                           onChange={maxValueInputChangeHandler}

                />
                <TextField variant="outlined" type="number" label={'start-value'} value={minValue}

                           onChange={startValueInputChangeHandler}/>
            </div>

            <Button onClick={settingsCounter} disabled={isChanged()} name='set'/>
        </div>
    );
};

export default SetCounter;