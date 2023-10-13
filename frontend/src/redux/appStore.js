import {muiSlice}   from "./slices/muiSlice";
import { dataSlice } from "./slices/dataSlice";

import {configureStore} from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import {combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";


const persistConfig={
    key:'marvelAppState',
    storage,
    whiteList:["muiReducersState","dataReducerState"]
}

const rootReducer= combineReducers({
    muiReducerState: muiSlice.reducer, 
    dataReducerState: dataSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const appStore = configureStore({
    reducer: persistedReducer,
    middleware:[thunk]
})