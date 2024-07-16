import mongoose,{Schema} from 'mongoose';

const videoSchema= new Schema({
        
        videoFile:{
            type: String,
            d:true,
            
        },
        thumbnail:{
            type: String,
            d:true,    
        },
       title:{
            type: String,
            d:true,
        },
        description:{
            type: String, 
            d:true,
        },
        duration :{
            type: Number, //
            required: true
            
        },
        views:{
            type: Number,
            default: 0,

        },
        isPublished:{
            type: Boolean,
            default: true
            
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }
        
},
{

 timestamps: true
}
)

export const Video = mongoose.model("Video",videoSchema)