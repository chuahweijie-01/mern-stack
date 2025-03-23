import WorkoutPage from '../workout/workout';
import WorkoutForm from '../workout/workout.form';

const HomePage = () => {
    return (
        <div className='home'>
            <WorkoutPage />
            <WorkoutForm />
        </div>
    )
}

export default HomePage