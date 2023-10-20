import express from 'express'
import axios from 'axios'
import cors from 'cors'
import crypto from 'crypto-js'
import nodemon from 'nodemon'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const puerto = process.env.PUERTO


app.use(cors())
app.use(express.json())

//configuración de la API
const timeStamp = process.env.TIME_STAMP
const publicKey = process.env.PUBLIC_KEY
const privateKey = process.env.PRIVATE_KEY

const hashString = timeStamp + privateKey+ publicKey

const md5Hash = crypto.MD5(hashString).toString()





console.log('--------------------------------------------------------------------------------------')
console.log(md5Hash)

const baseUrl = `https://gateway.marvel.com:443/v1/public/characters?&ts=1&apikey=${publicKey}&hash=${md5Hash}`


const resultadosPorPagina= 20

// rutas backend

app.get('/api/heroes', async (req, res) => {
    try {
            const pagina = parseInt(req.query.pagina) || 1
            const offset =(pagina-1)* resultadosPorPagina
            const url= `${baseUrl}&limit=${resultadosPorPagina}&offset=${offset } `
            const respuesta = await axios.get(url)
            const dataRespuesta = respuesta.data
            res.json(dataRespuesta)
    } catch (error) {
        console.log(error)
    }
})

app.get('/api/heroe/:id', async (req, res) => {
    try {
        const {id}= req.params
        const url= `https://gateway.marvel.com:443/v1/public/characters/${id}?&ts=1&apikey=${publicKey}&hash=${md5Hash}`

        const respuesta= await axios.get(url)
        const dataRespuesta=respuesta.data
        res.json(dataRespuesta)
 
    } catch (error) {
        console.log(error)
    }
})




app.listen(puerto, () => {
    console.log(`Servidor backend corriendo en: http://localhost:${puerto}`)
})


