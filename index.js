 const express=require('express')
 const app=express()
 const cors=require('cors')

 const port=process.env.PORT||8000

//  middleware 


 app.use(cors())
 app.use(express.json())

 app.get('/',(req,res)=>{
    res.send('Server is running')

 })

 
  app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
  })

