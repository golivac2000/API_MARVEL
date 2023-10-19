import React from 'react'
import Button from '@mui/material/Button';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MarvelLogo from '../imagenes/MARVELMARVEL.png'

import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, IconButton, Paper, Stack, Typography } from '@mui/material';

export const HomePagina = () => {
  return (
    <Grid container justifyContent='center' >
   
        <Grid className='bordes' sx={{margin:2}} xs={12} sm={6} md={6} lg={2} justifyContent='center' alignItems='center'>
        <Paper sx={{padding:2, }}>
          <Stack spacing={2} direction='column' alignItems='center'   >
            <Avatar alt='Cheto' sx={{width:56, height:56, color:'black', backgroundColor: 'White'}}   />
            <Typography variant='h4' aling='center'>  GRUPO 2</Typography>
            <Typography variant='h6' aling='center'>  API MARVEL</Typography>
            
          </Stack>
          <Paper elevation={4}>
            <Stack direction='row' spacing={2} alignItems='center' justifyContent='center' sx={{margin:2}}>
              

              <IconButton href="https://github.com/golivac2000/API_MARVEL.git">
                <GitHubIcon color="secondary" />
              </IconButton>

             
            </Stack>
          </Paper>
        </Paper>
        </Grid>

        <Grid display='flex' justifyContent='center' alignItems='center'   xs={12} sm={12} lg={12} xl={12}>
          <Paper className='bordes' sx={{padding:5,width:300}}>
          <img src={MarvelLogo} style={{maxWidth: '100%', height: 'auto'}} />
          </Paper>
          
        </Grid>

    </Grid>
  )
}
