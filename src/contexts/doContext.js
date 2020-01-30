const {List} = require('immutable');

import {createContext} from 'react';
import Workout from '@/models/workout';
import WorkoutProcess, {
  ProcessStatus as WorkoutProcessStatus,
} from '@/models/workoutProcess';
import WorkoutResult from '@/models/workoutResult';

const DoContext = createContext();
export default DoContext;

export const workoutContext = {
  name: 'workout',
  nameJa: '筋トレ',
  doingDescription: 'Training',
  initialState: {
    inbox: List([
      'プッシュアップ',
      'スクワット',
      'プルアップ',
      'レッグレイズ',
      'ブリッジ',
      'ハンドスタンド・プッシュアップ',
      '',
    ]).map(name => new Workout({name})),
  },
  processStatus: WorkoutProcessStatus,
  newRecord: name => new Workout({name}),
  newProcess: name => new WorkoutProcess({name}),
  newResult: (name, count, seconds) =>
    new WorkoutResult({name, count, seconds}),
  resultText: x => `${x.count}回 (${x.seconds}秒)`,
  resultTweetText: x => `${x.name}: ${x.count}回 (${x.seconds}秒)`,
  hashtags: '筋トレーナー',
};
