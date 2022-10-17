export default class ScheduleFild {
	constructor(
		date = new Date(Date.now()).toLocaleDateString(),
		time = new Date(Date.now()).toLocaleTimeString(),
		event = '',
		prayer = new Array()
	) {
		this.date = date;
		this.time = time;
		this.event = event;
		this.prayer = prayer;
	}
}
