
import Grid from '@mui/material/Unstable_Grid2'
import React, {useEffect, useState} from 'react'
import {CardComponent } from '../componentes/CardComponent'
import { PaginacionComponent } from '../componentes/PaginacionComponent'
import {useDispatch,useSelector} from 'react-redux'
import { LoaderComponent } from '../componentes/LoaderComponent'


export const HeroesPagina = () => {

  const{indicePaginacion}= useSelector(state=>state.dataReducerState)
  console.log(indicePaginacion)


const [dataPaginacion, setDataPaginacion]= useState({})
const { limit, offset, total}=dataPaginacion
const [dataHeroes, setDataHeroes] = useState([])


  useEffect(()=>{
      async function obtenerData(){
          try {
            const url=`http://localhost:4000/api/heroes/?pagina=${indicePaginacion}`

            const datosDeLaPeticion= await fetch(url)
            const datos= await datosDeLaPeticion.json()
            const {results, limit, offset, total}= datos.data

            setDataHeroes(results)
            setDataPaginacion({limit, offset, total})

           } catch (error){
            console.log('Erro al obtener datos del backend: ', error)
           }
      }

      obtenerData()


  },[indicePaginacion])


  if(dataHeroes.length === 0){
    return <LoaderComponent/>
  }


  return (
    <Grid  spacing= {2} container sx={{margin:2}}>
       {
        dataHeroes.map( item  =>(
         <Grid key={item.id} xs={12} sm={6} md={4} lg ={2} height={350} display='flex' justifyContent='center' alignItems='center'>
          <CardComponent infoHeroe={item}/>
         </Grid>

        ))
       }

       <Grid xs={12} display='flex' justifyContent='center' alignItems='center'> 

       <PaginacionComponent total={total}  />
       </Grid>
    </Grid>
   
  )
}
