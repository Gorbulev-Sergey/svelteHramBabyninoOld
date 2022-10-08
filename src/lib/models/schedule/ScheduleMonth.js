import ScheduleDay from './ScheduleDay';
import ScheduleTime from './ScheduleTime';

export default class ScheduleMonth {
	constructor(month = 1) {
		this.daysInMonth = new Date(new Date(Date.now()).getFullYear(), month, 0).getDate();
		this.scheduleDays = new Map();
		for (let day = 1; day <= this.daysInMonth; day++) {
			this.scheduleDays.set(day, new ScheduleDay(day, new Map()));
		}
	}
}
