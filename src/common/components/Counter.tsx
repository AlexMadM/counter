import React from 'react';
import {useSelector} from "react-redux";

import {AppRootStateType, useAppDispatch} from "../../app/store";

import {decrement, increment} from "../../features/slice_counter";
import Buttons from "./Buttons";
import {Container, Typography} from "@mui/material";

type Props = {
    setting: () => void
}
const Counter = (props: Props) => {

    const value = useSelector<AppRootStateType, number>(state => state.counter.value)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const dispatch = useAppDispatch();

    const incrementHandler = () => {
        dispatch(increment())
    }

    const decrementHandler = () => {
        dispatch(decrement())
    }
    const isChanged = () => {
        if (maxValue <= value || maxValue <= 0) {
            return true;
        }
    }


    return (
        <Container  sx={{ display:'flex',flexDirection:'column' ,alignItems:'center' } } >
            <Typography gutterBottom variant="h5" component="div">
                {value}
            </Typography>


            <Container sx={{ display:'flex', justifyContent:'center',alignItems:'center',gap:'10px'} }>
                <Buttons onClick={incrementHandler} disabled={isChanged()} name='inc'/>
                <Buttons onClick={decrementHandler} disabled={value <= 0} name='dec'/>
                <Buttons onClick={props.setting} name='set'/>
            </Container>


        </Container>
    );
};

export default Counter;