import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import {createTheme} from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import {useSelector} from 'react-redux'

import {temaLight, temaDark} from '../mui/temas'


export const AppMui = ({ children }) => {

  const {colorTema} = useSelector(state =>state.muiReducerState)

 

  const tema = createTheme({    
    palette: {
      //Operador spread 
      ...colorTema,

    }
  }) 


  return (
    <ThemeProvider theme={tema}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
