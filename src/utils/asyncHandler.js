const asyncHandler = (requestHandler) =>{
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
    .catch((err) => next(err))
  }
}

export { asyncHandler }




// const asunchandler = (fn)  => async (req, res, next) => {
//   try{
//       await function(req, res, next)
//  }(err){
//     res.status(err.code || 500).json({
//       success: false,
//       message : err.message
//     })
//   }
// }