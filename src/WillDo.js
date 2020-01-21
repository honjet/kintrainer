import React, {useState, useReducer} from 'react';
import {withRouter, Route} from 'react-router-dom';

import Doing from './Doing';
import Workouts from './WillDo/Workouts';

const initialState = {workouts: ['プッシュアップ', 'スクワット', '']};

const reducer = (state, action) => {
  switch (action.type) {
    case 'change':
      state.workouts[action.index] = action.workout;
      return {workouts: state.workouts};
    case 'add':
      state.workouts.push('');
      return {workouts: state.workouts};
    case 'remove':
      state.workouts.splice(action.index, 1);
      return {workouts: state.workouts};
    default:
      throw new Error();
  }
};

const WillDo = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <h1>筋トレメニューを決める</h1>
      <p>やりたい筋トレの名前を入力してください。</p>
      <Workouts workouts={state.workouts}
        add={() => dispatch({type: 'add'})}
        remove={index => dispatch({type: 'remove', index: index})}
        change={(workout, index) =>
          dispatch({type: 'change', index: index, workout: workout})
        }
    />
      <button
        onClick={() =>
          props.history.push({pathname: '/doing', state: {name: name}})
        }>
        開始する
      </button>
    </div>
  );
};

export default withRouter(WillDo);
