import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type States = {
    value: number
    settings: boolean
    maxValue: number
    minValue: number
}


const initialState: States = {
    value: 0,
    settings: true,
    maxValue: 3,
    minValue: 0
};


const slice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        }, decrement: (state) => {
            state.value -= 1;
        }, setsCount: (state, action: PayloadAction<{ setting: boolean }>) => {
            state.settings = !action.payload.setting
        }, settings: (state, action: PayloadAction<{ minValue: number, maxValue: number }>) => {
            state.value = action.payload.minValue;
            state.maxValue = action.payload.maxValue
        },
        // load:(state,action:PayloadAction<States>)=>{
        //    return action.payload
        //
        //
        // }
    }
})


export const click = slice.reducer
export const {increment, decrement, setsCount, settings} = slice.actions
