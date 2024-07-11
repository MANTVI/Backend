import mongoose from 'mongoose'
import {DB_NAME}  from '../constant.js'


const connectDB= async()=>{     // database connection
    try {
        
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

       console.log(`\n   MongoDB  connected !! DB Host ${connectionInstance.connection.host}` )
        
    } catch (error) {
        console.error("MONGOODB ERROR FAILD :" ,error)
        process.exit(1)
        //throw error
        
    }
}

export default connectDB