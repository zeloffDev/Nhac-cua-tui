const stateDefaul={
    search:{},
    resultSearch:{}
}

export const SearchReducer = (state=stateDefaul,action)=>{
    switch (action.type) {
        case "SEARCH_TYPE":{
            state.search=action.data
            return {...state}
        }
        case "RESULT_SEARCH":{
            state.resultSearch=action.data
            return {...state}
        }
        default:
            return {...state}
    }
}