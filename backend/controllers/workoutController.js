const Workout = require("../models/workoutModel");
const mongoose = require('mongoose')

// get all workouts
const getWorkouts = async (req,res) => {
    const workouts = await Workout.find({}).sort({createdAt:-1}) // sab chahiye toh find k andar empty object daalo i.e., no condition at all what to find toh saare aajaege
    res.status(200).json(workouts)
}

// get a single workout
    const getWorkout = async (req,res) => {
        const  {id} = req.params
        
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({msg:"No such workout"})
        }

        const workout = await Workout.findById(id)

        if(!workout) {
           return res.status(400).json({msg:"No such workout"})
        }

        res.status(200).json(workout)
    }


// create a new workout

const createWorkout =  async(req,res) => {
    const {title,load,reps} = req.body 
    // add doc to db
    try{
        
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)

    } catch(error) {
        res.status(400).json({error:error.message})
    }
}

// delete a workout

// update a workout


module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts
}