const express = require('express')
const { createWorkout, getAllWorkouts, getWorkoutById, deleteWorkoutById, patchWorkoutById } = require('../controllers/workoutController')
const router = express.Router()

router.get('/', getAllWorkouts)

router.get('/:id', getWorkoutById)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkoutById)

router.patch('/:id', patchWorkoutById)

module.exports = router;