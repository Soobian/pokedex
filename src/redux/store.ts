import { createStore, Store  } from 'redux';
import { ThunkAction, Action } from '@reduxjs/toolkit';

import reducer from './reducers/index'

function configureStore() {
    const store: Store = createStore(reducer);
    console.log(store)
    return store;
}

export  const store = configureStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;