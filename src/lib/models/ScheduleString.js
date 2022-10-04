export default class ScheduleString {
	// @ts-ignore
	constructor(day = null, event = null, time = '0:00', prayer = null) {
		this.day = day;
		this.event = event;
		this.time = time;
		this.prayer = prayer;
	}
}
