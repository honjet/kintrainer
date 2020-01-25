import {createContext} from 'react';
import Workout from '@/models/workout';
import WorkoutResult from '@/models/workoutResult';

const DoContext = createContext();
export default DoContext;

export const workoutContext = {
  name: 'workout',
  nameJa: '筋トレ',
  doingDescription: 'Training',
  initialState: {
    inbox: [
      'プッシュアップ',
      'スクワット',
      'プルアップ',
      'レッグレイズ',
      'ブリッジ',
      'ハンドスタンド・プッシュアップ',
      '',
    ].map(s => new Workout(s)),
  },
  processStatus: {
    STANDBY: 'standby',
    PROGRESS: 'progress',
    DONE: 'done',
  },
  newItem: name => new Workout(name),
  newResult: (workout, count, seconds) =>
    new WorkoutResult({workout, count, seconds}),
};
