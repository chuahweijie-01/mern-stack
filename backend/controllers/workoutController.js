const WorkoutsModel = require('../models/WorkoutsModel')
const mongoose = require('mongoose')

exports.getAllWorkouts = async (req, res) => {
    const workouts = await WorkoutsModel.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts)
}

exports.getWorkoutById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }
    const workout = await WorkoutsModel.findById(id)

    if (!workout) {
        return res.status(404).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
}

exports.createWorkout = async (req, res) => {
    const { title, load, reps } = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }

    if (!load) {
        emptyFields.push('load')
    }

    if (!reps) {
        emptyFields.push('reps')
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the empty fields', emptyFields })
    }

    try {
        const workout = await WorkoutsModel.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

exports.deleteWorkoutById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }
    const workout = await WorkoutsModel.findOneAndDelete({ _id: id })
    if (!workout) {
        return res.status(400).json({ error: 'No such workout' })
    }
    res.status(200).json(workout)
}

exports.patchWorkoutById = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }
    const workout = await WorkoutsModel.findOneAndUpdate({ _id: id }, { ...req.body })
    if (!workout) {
        return res.status(400).json({ error: 'No such workout' })
    }
    res.status(200).json(workout)
}