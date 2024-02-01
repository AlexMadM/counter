import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppRootStateType} from "../app/store";
export type State={
    value:number
}

const initialState = {
  value:0 as number ,
};



const slice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment:(state)=>{
            state.value +=1
}, decrement: (state) => {
            state.value -= 1;
        },
    }
})


export const click=slice.reducer
export const {increment,decrement}=slice.actions
