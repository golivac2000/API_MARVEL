
import Grid from '@mui/material/Unstable_Grid2'
import React, {useEffect, useState} from 'react'


export const HeroesPagina = () => {
  const [dataHeroes, setDataHeroes] = useState([])

  console.log(dataHeroes)


  useEffect(()=>{
      async function obtenerData(){
          try {
            const url=`http://localhost:4000/api/heroes`

            const datosDeLaPeticion= await fetch(url)
            const datos= await datosDeLaPeticion.json()
            const {results, limit, offset, total}= datos.data

            setDataHeroes(results)

           } catch (error){
            console.log('Erro al obtener datos del backend: ', error)
           }
      }

      obtenerData()


  },[])


  return (
    <Grid className='bordes' spacing= {2} container sx={{margin:2}}>
       

    </Grid>
   
  )
}
