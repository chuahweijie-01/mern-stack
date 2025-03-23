require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutsRoute = require('./routes/workouts')

const app = express()
app.use(express.json())

app.use((req, res, next) => {
    next()
})

app.use('/api/workouts', workoutsRoute)

mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`Connected to db and listening on port ${process.env.PORT}`))
    })
    .catch((err) => {
        console.log(err)
    })

