import {createSlice} from '@reduxjs/toolkit'
import {temaLight} from '../../mui/temas'

const estadoInicial ={
    colorTema: temaLight
}

export const muiSlice = createSlice({

    name: 'muiSlice',
    initialState:estadoInicial,
    reducers:{
        reducerMuiTema : (state, action)=>{

            state.colorTema=action.payload
        }
    }

})

export const {reducerMuiTema}= muiSlice.actions