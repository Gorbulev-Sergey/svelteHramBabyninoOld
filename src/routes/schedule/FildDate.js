import FildTime from './FildTime';

export default class FildDate {
	_dayOfWeek(day = 1) {
		switch (day) {
			case 0:
				return 'воскресенье';
			case 1:
				return 'понедельник';
			case 2:
				return 'вторник';
			case 3:
				return 'среда';
			case 4:
				return 'четверг';
			case 5:
				return 'пятница';
			case 6:
				return 'суббота';
			default:
				return '';
		}
	}
	constructor(date = new Date(), fildsTime = new Array(new FildTime())) {
		this.date = date.toDateString();
		this.fildsTime = fildsTime;
	}
}
