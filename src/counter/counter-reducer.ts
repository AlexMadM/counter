import {Dispatch} from "redux";
import {AppRootStateType} from "./store";

export type IncrementType = {
    type: 'INCREMENT',

};
export type ResetHandlerType ={
    type:  'RESET'
};

export type setHandlerType ={
    type:  'SET'
    maxValue:number
    count:number
};


type ActionsType = IncrementType |ResetHandlerType |setHandlerType | setFromLocalStorageType

export type CountType = {
    count: number
    maxValue:number
}

let initialState:CountType ={
    count:0,
    maxValue:5
};


export const counterReducer = (state = initialState, action: ActionsType):CountType => {
    switch (action.type) {
        case 'INCREMENT':{
            return {...state, count:state.count +=1 };
        }
        case 'RESET' :{
            return {...state,count:0}
        }
        case 'SET':{
            return {...state,count:action.count,maxValue:action.maxValue}

        }
        case "SET-VALUE-FROM-LOCAL-STORAGE":
            return {...state,count:action.count}
        default: return state;

    }


};

export const incrementAC = (): IncrementType => {
    return {type: 'INCREMENT'}as const
}


export const resetHandlerAC =():ResetHandlerType =>{
    return {type:'RESET'}as const
}

export  const setHandlerAc=(maxValue:number,startValue:number):setHandlerType=>{
    return {type:'SET', maxValue, count:startValue }as const
}

export type setFromLocalStorageType=ReturnType<typeof setFromLocalStorage>

export const setFromLocalStorage=(count:number)=>({
type:"SET-VALUE-FROM-LOCAL-STORAGE",count
}as const)

// export const incValuesTC=(count:number)=>(dispatch:Dispatch,getState:()=>AppRootStateType)=>{
//     let value =getState().counter.count
// localStorage.setItem('count',JSON.stringify(value+1))
//     dispatch(incrementAC())
// }
//
// export const setValueFromLocalStorage=()=>(dispatch:Dispatch)=>{
//     let value=localStorage.getItem("count")
//     if(value) {
//         let newValue = JSON.parse(value)
//       dispatch(setFromLocalStorage(newValue))
//     }
// }