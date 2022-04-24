import express from 'express'
import * as  dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import postRoutes from "./routes/postRoutes.js"
import groupRoutes from './routes/groupRoutes.js'
import cors from "cors"

dotenv.config()

connectDB()

const app = express() 

app.use(cors())

app.use(express.json())

app.use('/api/auth', userRoutes)
app.use('/api/post', postRoutes)
app.use('/api/group', groupRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT}`
  )
)
