require('dotenv').config()

const exp=require('express')

const mongoose=require('mongoose')

const workoutsRouter=require('./router/workouts')
//express app
const app=exp()

//middleware
app.use(exp.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


//routes
app.use('/',workoutsRouter)


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
//listen for requesting
app.listen(process.env.PORT,()=>{
    console.log('server running on port  ',process.env.PORT)
})
})
.catch((err)=>{
    console.log(err)
})



