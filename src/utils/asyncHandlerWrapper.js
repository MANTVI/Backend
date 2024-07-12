const asyncHandler=(requestHandler)=>{   //using promise
    (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next))
    .catch((err)=>next(err))
    }
}

export {asyncHandler}

//Another method (trycatch with async)

// const asyncHandler=()=>{
//     async ()={}
// }

// const asyncHandler=(func)=> async( req,res,next)=>{
//     try {
//         await func(req,res,next)
        
//     } catch (error) {
//         res.status(err.code|| 500).json({
//             success: false,
//             message: err.message
//         })
        
//     }

// }