import {createContext} from 'react';
import Workout from '@/models/workout';

const DoContext = createContext();

export default DoContext;

export const workoutContext = {
  name: 'workout',
  nameJa: '筋トレ',
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
  newItem: name => new Workout(name),
};
