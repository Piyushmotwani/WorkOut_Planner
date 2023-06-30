import React from 'react'

const WorkoutDetail = (params) => {
  return (
    <div className='workout-details'>
      <h4>{params.workout.title}</h4>
      <p><strong>Load (kg): </strong>{params.workout.load}</p>
      <p><strong>Reps : </strong>{params.workout.reps}</p>
      <p>{params.workout.createdAt}</p>

    </div>
  )
}

export default WorkoutDetail
