import { GET_HOME_TYPE, GET_PLAY_LIST_TYPE } from "../actions/type/DataType"

const stateDefaul={
    getHome:{},
    getPlayList:{},
    songs:[]
}

export const DataReducer=(state=stateDefaul,action)=>{
    switch (action.type) {
        case GET_HOME_TYPE:{
            state.getHome= action.data
            return {...state}
        }case GET_PLAY_LIST_TYPE:{
        
            state.getPlayList=action.data
            state.songs=action.data.playlist.songs
            return {...state}
        }
        
        default:
         return {...state}
    }
}