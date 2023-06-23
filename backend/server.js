require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()


// middle ware 
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// routes
app.use('/api/workouts',workoutRoutes)

// listen for request
app.listen(process.env.PORT,()=>{
    console.log('Listening on Port',process.env.PORT)
})