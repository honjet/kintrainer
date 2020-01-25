const { Record } = require('immutable')

const WorkoutRecord = Record({name: '', id: null})

export default class Workout extends WorkoutRecord {
  isEmpty() {
    return !this.name;
  }
}
