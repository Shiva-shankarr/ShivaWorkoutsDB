const exp=require('express')

const {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout}=require('../controllers/workoutController')

//const Workout=require('../models/workoutModel')

const router=exp.Router()

//get all workouts
router.get('/',getWorkouts)

//get a single user
router.get('/:id',getWorkout)

//Post a New workout
router.post('/', createWorkout)

//Delete a workout
router.delete('/:id',deleteWorkout)

//Update a workout
router.put('/:id',updateWorkout)

module.exports=router