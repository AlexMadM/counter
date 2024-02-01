import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type State = {
    value: number
}

const initialState = {
    value: 0 as number,
    settings: true as boolean,
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
            state.value = action.payload.minValue ;state.maxValue = action.payload.maxValue
        }
    }
})


export const click = slice.reducer
export const {increment, decrement, setsCount, settings} = slice.actions
