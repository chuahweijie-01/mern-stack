import React from 'react'
import { useWorkoutContext } from '../hooks/workout.context.hook'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ props }) => {

    const { dispatch } = useWorkoutContext()

    const handleDeletebyId = async () => {
        const response = await fetch(`/api/workouts/${props._id}`, {
            method: 'DELETE'
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }

    return (
        <div className='workout-details'>
            <h4>{props.title}</h4>
            <p><strong>Load (kg): </strong>{props.load}</p>
            <p><strong>Reps: </strong>{props.reps}</p>
            <p>{formatDistanceToNow(new Date(props.createdAt), { addSuffix: true })}</p>
            <span className='material-symbols-outlined' onClick={handleDeletebyId}>delete</span>
        </div>
    )
}

export default WorkoutDetails