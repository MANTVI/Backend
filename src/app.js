import  express from 'express'
import cors from "cors"   // handling CORS
import cookieParser from 'cookie-parser'  //access/set browser cookies

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN, //white listing url
}))

app.use(express.json({limit:"16kb"})) // accept JSON data with limit
app.use(express.urlencoded({extended: true,limit:"16kb"}))  // accept URL data with limit
app.use(express.static("public"))

app.use(cookieParser())





export {app}