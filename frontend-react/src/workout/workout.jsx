import React, { useEffect } from 'react'
import WorkoutDetails from './workout.details';
import { useWorkoutContext } from '../hooks/workout.context.hook';

const WorkoutPage = () => {
    const { workouts, dispatch } = useWorkoutContext();

    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()
            if (response.ok) {
                dispatch({ type: 'SET_WORKOUT', payload: json })
            }
        }
        fetchWorkout()
    }, [dispatch])

    return (
        <div className='workouts'>
            {workouts && workouts.map(workout => (
                <WorkoutDetails key={workout._id} props={workout} />
            ))}
        </div>
    )
}

export default WorkoutPage