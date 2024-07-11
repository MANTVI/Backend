// require('dotenv').config({path: './env'})

import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log("ERROR:",error)
        throw error
    })
    app.listen(process.env.PORT|| 8000,()=>{    // listen request
        console.log(`Server is running on port: ${process.env.port}`) 
    })
})
.catch((error)=>{
        console.log("MONGOODB ERROR FAILD :" ,error)
})


/*
const app = express()   //not best approach

;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR:",error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log("Server is running on port",process.env.PORT)
        })
        
    } catch (error) {
        console.error("ERROr:" ,error)
        throw error
        
    }
})() */ //not best approach, write in different file fr beteer