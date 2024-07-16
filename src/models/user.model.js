import mongoose,{Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//direct encryption is not poddible so use mongooose hook

const userSchema= new Schema({
        
        username:{
            type: String,
            required:true,
            unique: true,
            lowercase: true,
            index: true,  // otimise the searching in usename
            trim:true
        },
        email:{
            type: String,
            required:true,
            unique: true,
            lowercase: true,
            trim:true
            
        },
        fullName:{
            type: String,
            required:true,
            index: true,  // otimise the searching in usename
            trim:true
        },
        avatar:{
            type: String, // cloud URL
            required:true,
        },
        coverImage:{
            type: String,  // cloud URL
            
        },
        watchHistory:[     // make this project complex and next level
            {
                type: Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        password:{
            type: String,
            required:[true, "password is required"],

        },
        refreshToken:{
            type: String,
        },
        
},
{

 timestamps: true
}
)
userSchema.pre("save",async function(next){  // encrypted password
    if(this.isModified("password")) return next();
    this.password= bcrypt.hash(this.password,10)
})
userSchema.methods.isPasswordCorrect= async function(password){  //  create own method
       return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function(){   //  create own method

    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){    //  create own method
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}


export const User = mongoose.model("User",videoSchema)