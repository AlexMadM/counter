export type IncrementType = {
    type: 'INCREMENT',

};
export type ResetHandlerType ={
  type:  'RESET'
};


type ActionsType = IncrementType |ResetHandlerType

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
            default: return state;

    }


};

export const incrementAC = (): IncrementType => {
    return {type: 'INCREMENT'}as const
}


export const resetHandlerAC =():ResetHandlerType =>{
    return {type:'RESET'}as const
}