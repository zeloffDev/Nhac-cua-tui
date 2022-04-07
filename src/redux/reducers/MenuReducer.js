const stateDefault={
    open:false
}

export const MenuReducer=(state=stateDefault,action)=>{
    switch (action.type) {
        case "TONGGLE":{
            state.open = !state.open
        
            return{...state}
        }
        case "CLOSEMENU":{
            state.open=false
            return{...state}
        }

        default:
            return {...state}
    }
}