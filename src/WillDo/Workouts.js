import React, {useState, useReducer} from 'react';

const Workouts = props => {
  const {workouts, add, change, remove} = props;
  const lastIndex = workouts.length - 1;

  const updateWorkout = (workout, index) => {
    change(workout, index);
    if (index === lastIndex - 1 && workout === '') {
      remove(index);
    }
    if (index === lastIndex && workout !== '') {
      add();
    }
  };
  const item = (workout, index) => (
    <li key={index}>
      <input
        type="text"
        name={`workout_${index}`}
        id={`workout_${index}`}
        value={workout}
        onChange={e => {
          updateWorkout(e.target.value, index);
        }}
      />
    </li>
  );

  const list = workouts.map(item);
  return (
    <div>
      {list}
    </div>
  );
};

export default Workouts;
