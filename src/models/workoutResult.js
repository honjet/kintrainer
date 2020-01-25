export default class WorkoutResult {
  constructor({workout, count, seconds, id = null}) {
    this.id = id;
    this.name = workout.name;
    this.count = count;
    this.seconds = seconds;
  }
}
