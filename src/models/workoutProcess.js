const {Record} = require('immutable');

export const ProcessStatus = {
  STANDBY: 'standby',
  WIP: 'work_in_progress',
  DONE: 'done',
};

const WorkoutProcessRecord = Record({
  name: '',
  status: ProcessStatus.STANDBY,
  count: 0,
  seconds: 0,
  id: null,
});

export default class WorkoutProcess extends WorkoutProcessRecord {
  wip() {
    return this.set('status', ProcessStatus.WIP);
  }

  done(count, seconds) {
    return this.merge({count, seconds, status: ProcessStatus.DONE})
  }

  isStandby() {
    return this.get('status') == ProcessStatus.STANDBY;
  }

  isWIP() {
    return this.get('status') == ProcessStatus.WIP;
  }

  isDone() {
    return this.get('status') == ProcessStatus.DONE;
  }
}
