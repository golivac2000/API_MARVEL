import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import {createTheme} from '@mui/material'
import { ThemeProvider } from '@emotion/react'

import {temaLight, temaDark} from '../mui/temas'


export const AppMui = ({ children }) => {
  const tema = createTheme({
    palette: {
      //Operador spread 
      ...temaDark,

    }
  }) 


  return (
    <ThemeProvider theme={tema}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
