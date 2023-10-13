import { createSlice } from "@reduxjs/toolkit";

const estadoInicial={
    indicePaginacion:1,

}

export const dataSlice =createSlice({
    name: 'dataSlice',
    initialState: estadoInicial,
    reducers:{
        reducerSetIndicePaginacion: (state,action)=>{
            state.indicePaginacion= action.payload

        }
    }
})

export const {reducerSetIndicePaginacion} = dataSlice.actions