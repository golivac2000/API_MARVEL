import express from 'express'
import axios from 'axios'
import cors from 'cors'
import crypto from 'crypto-js'
import nodemon from 'nodemon'
import dotenv from 'dotenv'

dotenv.config()

const app= express()
const puerto= process.env.PUERTO


app.use(cors())
app.use(express.json())

// rutas backend

app.get('/api/heroes', async (req   , res)=> {
    try{

    }catch (error){
    console.log(error)
    }
 }) 

 app.get('/api/heroe/:id', async (req, res)=>{
    try{

    }catch (error){
        console.log(error)
    }
 })




app.listen(puerto, ()=>{
    console.log(`Servidor backend corriendo en: http://localhost:${puerto}`)
})


