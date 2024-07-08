function tempsDuTravailMiddleware(req,res,next) {
         
  const current=new Date()
   const day=current.getDay()
   const hour=current.getHours()

  if (day>0&&day<6&&hour>8&&hour<18) {
    next()
   }
  
  return res.status(503).send("acces denied")
}


module.exports=tempsDuTravailMiddleware 