import React from 'react';
import Counter from "../common/components/Counter";
import SetCounter from "../common/components/SetCounter";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "./store";
import {setsCount} from "../features/slice_counter";
import s from './app.module.css'
import {Box, Container} from "@mui/material";

const App = () => {
    // useEffect(() => {
    //     dispatch(load(loadState()))
    //     console.log(loadState())
    // }, []);
    const dispatch = useAppDispatch();
    const setting = useSelector<AppRootStateType, boolean>(state => state.counter.settings)
    const sett = () => {
        dispatch(setsCount({setting}))
    }
    return (<Container sx={{ display:'flex', justifyContent:'center',alignItems:'center' }}>

                {setting ? <Counter setting={sett}/> : <SetCounter setting={sett}/>}


    </Container>




    );
};

export default App;