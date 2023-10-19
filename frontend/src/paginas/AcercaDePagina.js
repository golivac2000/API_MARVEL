import React, {useState} from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import { List, ListItemIcon, ListItemButton,ListSubheader,ListItemText } from '@mui/material'
import DataObjectIcon from '@mui/icons-material/DataObject';



const backend = ['Node JS', 'Express', 'Nodemon', 'Axios', 'DontEnv', 'Cors', 'Crypto JS']
const frontend = ['React JS', 'Material UI', 'React Router Dom', 'Redux Toolkit', 'Redux Persist', 'Thunk', 'Crypto JS']
const integrantes = [{carnet:'1790-20-10423', nombre:'Gabriel Antonio Oliva Camey'}, {carnet:'1790-19-21878', nombre:'Juan Manuel de la Cruz Gonzales'}, {carnet:'1790-20-1253', nombre:'Jessica Nayeli Gonzalez Hernández'}, {carnet:'1790-20-15750', nombre:'Eduardo José Leal de la Cruz'}, {carnet:'1790-20-2898', nombre:'Anthoni Gilberto Sánchez Zetino'}, {carnet:'1790 20 19162', nombre:'Roberto Andrés Tuchez Alvarez'}]


export const AcercaDePagina = () => {
const [backendLib, setBackendLib] = useState(backend)
const [frontLib, setFrontLib] = useState(frontend)
const [integrantesList, setIntegrantes]= useState(integrantes)




  return (
    <Grid container display='flex' justifyContent='center' alignItems='center'>
      <Grid xs={12} sm={12} lg={12} display='flex' justifyContent='center' alignItems='center' >
        <List
       sx={{ width: '100%', maxWidth: 660, bgcolor: 'background.paper', margin: 5 }}
       component="nav"
       subheader={

         <ListSubheader component="div">

          Integrantes
         </ListSubheader>
       }
     >
     {
       integrantesList.map((item,index)=>{
        const {carnet, nombre} = item
        return (

         <ListItemButton key={index}>
           <ListItemIcon sx={{ color:'white'}}>
             <DataObjectIcon/>
           </ListItemIcon>
           <ListItemText primary={nombre} />
           <ListItemText primary={carnet} />

         </ListItemButton>
       )
      })
     }
     </List>
      </Grid>




      <Grid xs={12} sm={12} lg={12} display='flex' justifyContent='center' alignItems='center' >
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 5 }}
          component="nav"
          subheader={

            <ListSubheader component="div">

              Backend
            </ListSubheader>
          }
        >
        {
          backendLib.map((item,index)=>(

            <ListItemButton key={index}>
              <ListItemIcon sx={{ color:'white'}}>
                <DataObjectIcon/>
              </ListItemIcon>
              <ListItemText primary={item} />

            </ListItemButton>
          ))
        }
        </List>

      </Grid>








      <Grid xs={12} sm={12} lg={12} display='flex' justifyContent='center' alignItems='center' >
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 5 }}
          component="nav"
          subheader={

            <ListSubheader component="div">

             Fronted
            </ListSubheader>
          }
        >
        {
          frontLib.map((item,index)=>(

            <ListItemButton key={index}>
              <ListItemIcon sx={{ color:'white'}}>
                <DataObjectIcon/>
              </ListItemIcon>
              <ListItemText primary={item} />

            </ListItemButton>
          ))
        }
         </List>
      </Grid>



    </Grid>
  )
}
