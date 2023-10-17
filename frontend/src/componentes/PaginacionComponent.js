import React from 'react'
import {Pagination, Paper, Stack } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {reducerSetIndicePaginacion} from '../redux/slices/dataSlice'



export const PaginacionComponent = ({total=1}) => {

    const dispatch = useDispatch()
    
    const {indicePaginacion} = useSelector(state=>state.dataReducerState)

    

    const handleChange =(evento, valor)=>{
        dispatch(reducerSetIndicePaginacion(valor))
    }
    return (
        <Paper>
            <Stack pasing={2}> 
            <Pagination size='large' count={parseInt(total/20)} page={indicePaginacion} onChange={handleChange} /> 
            </Stack>
        </Paper>

    )
}
