import React, {ChangeEvent, useState} from 'react';

import {Box, TextField} from "@mui/material";
import {settings, States} from "../../features/slice_counter";
import {AppRootStateType, useAppDispatch} from "../../app/store";
import {useSelector} from "react-redux";

import Buttons from "./Buttons";
import {style} from "../../features/styleBox";

type Props = {
    setting: () => void
}
const SetCounter = (props: Props) => {
    const sets = useSelector<AppRootStateType, States>(state => state.counter)
    const dispatch = useAppDispatch();
    const [maxValue, setMaxValue] = useState(sets.maxValue)
    const [minValue, setminValue] = useState(sets.value);
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
    const settingsCounter = () => {
        dispatch(settings({minValue, maxValue}))
        props.setting()
    }

    return (
        <Box sx={{...style}}>
            <div>
                <TextField sx={{mr: '10px'}} variant="outlined" type="number" label={'max-value'} value={maxValue}
                           onChange={maxValueInputChangeHandler}

                />
                <TextField variant="outlined" type="number" label={'start-value'} value={minValue}

                           onChange={startValueInputChangeHandler}/>
            </div>
            <Box sx={{marginTop: '15px'}}>
                <Buttons onClick={settingsCounter} disabled={isChanged()} name='set'/>
            </Box>

        </Box>
    );
};

export default SetCounter;