import { combineReducers } from 'redux';
import urlReducer from './urlReducer';
import pickReducer from './pickReducer'
import detailsReducer from './detailsReducer';

let reducers = combineReducers({
    urls: urlReducer,
    pick: pickReducer,
    details: detailsReducer,
})

const rootReducer = (state: any, action: any) => {
    return reducers(state, action);
}

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;