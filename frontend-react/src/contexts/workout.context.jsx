import React, { createContext, useReducer } from 'react'
import { workoutReducer } from '../reducers/workout.reducer'

export const WorkoutContext = createContext()

const WorkoutContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: null
    })
    return (
        <WorkoutContext.Provider value={{ ...state, dispatch }}>
            {children}
        </WorkoutContext.Provider>
    )
}

export default WorkoutContextProvider