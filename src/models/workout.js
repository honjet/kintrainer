export default class Workout {
  constructor(name, id) {
    this.id = id;
    this.name = name;
  }

  isEmpty() {
    return !this.name;
  }
}
