
export type AddTaskActionType = {
    type: 'COUNT-PLUS',
    todolistId: string
    title: string
}

type CountType ={
    initialState:number
}

let initialState= 0


export const counterReducer =(state:CountType=initialState,action)=>{
    switch (action.type){
        case 'COUNT-PLUS':{
            return;
        }
        case 'ADD-TOSTORAGE':{
            return
        }
    }
    return state
}