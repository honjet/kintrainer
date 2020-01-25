const {Record} = require('immutable');

const WorkoutResultRecord = Record({name: '', count: 0, seconds: 0, id: null});

export default class WorkoutResult extends WorkoutResultRecord {}
