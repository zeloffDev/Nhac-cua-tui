import {applyMiddleware,combineReducers,createStore} from 'redux';
import thunk from 'redux-thunk'
import { DataReducer } from './reducers/DataReducer';
import { MenuReducer } from './reducers/MenuReducer';
import { PlayReducer } from './reducers/PlayReducer';
import { SearchReducer } from './reducers/SearchReducer';
import { SkeletonReducer } from './reducers/SkeletonReducer';


const rootReducer=combineReducers({
    //state
    MenuReducer,
    DataReducer,
    PlayReducer,
    SkeletonReducer,
    SearchReducer
})
export const store= createStore(rootReducer,applyMiddleware(thunk))