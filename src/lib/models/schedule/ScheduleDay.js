import ScheduleTime from './ScheduleTime';

export default class ScheduleDay {
	constructor(day = 1, scheduleTimes = new Map()) {
		this.day = day;
		this.scheduleTimes = scheduleTimes;
		this.scheduleTimes.set('0:00', new ScheduleTime());
	}
}
