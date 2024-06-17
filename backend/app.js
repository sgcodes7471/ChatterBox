import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import userRoutes from './routes/userRoutes.js'
import msgRoutes from './routes/msgRoutes.js'
import roomRoutes from './routes/roomRoutes.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({
    path:path.resolve(__dirname , '.env')
})

const app = express()
app.use(express.json())

app.cors({
    origin:'http://localhost:3000'
})

app.use(cookieParser())

app.get('/',(req, res)=>{res.send('Hello')})
app.use('/api/user' , userRoutes)
app.use('/api/message' , msgRoutes)
app.use('/api/room' , roomRoutes)

export default app