import { configureStore } from "@reduxjs/toolkit";
import {Simulate} from "react-dom/test-utils";
import {click} from "../features/slice_counter";
import {useDispatch} from "react-redux";



export const store = configureStore({
    reducer: {
      counter:click
    },
});

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();