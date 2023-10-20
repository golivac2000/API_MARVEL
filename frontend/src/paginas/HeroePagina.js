import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import { LoaderComponent } from '../componentes/LoaderComponent'
import Grid from '@mui/material/Unstable_Grid2'
import { Button,Divider,  Paper, Typography } from '@mui/material'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'


export const HeroePagina = () => {

  const {id} = useParams ()
  const [datosPersonaje, setDatosPersonaje]= useState(null)



  console.log(datosPersonaje)

  useEffect(()=>{   
    async function obtenerDatos (){
      const url= `http://localhost:4000/api/heroe/${id}`
      const respuesta= await fetch(url)
      const datos= await respuesta.json()
      const {results }= datos.data
      setDatosPersonaje(results)


    }
    obtenerDatos()
   }, [] )


   if(!datosPersonaje){
    return <LoaderComponent/>
   }

  const [personaje]= datosPersonaje
  const {name,description,thumbnail}=personaje

  return (
    <Grid container>
      <Grid xs={12} sm={12} lg={7} display='flex' justifyContent='center' sx={{ padding: 2 }}>
        <img className='bordes' style={{ maxWidth: '100%', height: 'auto' }} src={`${thumbnail.path}.${thumbnail.extension}`} />
      </Grid>

      <Grid xs={12} sm={12} lg={5} display='flex' justifyContent='center' alignItems='center'>

        <Paper variante='outlined' sx={{ margin: 3, padding: 5 }}>

          <Stack spacing={2}>
            <Paper elevation={4} sx={{ padding: 3 }} >
              <Typography variant='h4' >  Nombre: {name} </Typography>
              </Paper>
            <Typography >  Descripción: {description} </Typography>
            <Typography sx={{padding:2}} >  
              {description.length > 0 ? description :'No hay descripcion para este personaje'}
            
            </Typography>
            

          </Stack>

          <Divider/>
          <Button sx={{mt:2}}  component={Link} to='/api/heroes' color='secondary' variant='contained'>Regresar </Button>

        </Paper>
      </Grid>
    </Grid>
  )
}
