import { Button, CardActionArea, CardContent, CardMedia, Typography, Card } from '@mui/material'
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'

export const CardComponent = ({infoHeroe}) => {


  const {thumbnail, id}= infoHeroe

  return (
    <CardActionArea>
        <Card className= 'bordes' sx={{height:300} }>
           

            <CardMedia  height={220} component='img' image={`${infoHeroe.thumbnail.path}.${infoHeroe.thumbnail.extension}`}    />
            <CardContent> 
                <Typography component='div' noWrap > {infoHeroe.name} </Typography>
                <Button size='samll' variant='contained' color='primary' component={RouterLink} to={`/api/heroe/${id}`}> Mas detalles</Button>
            </CardContent>

        </Card>


    </CardActionArea>
  )
}
