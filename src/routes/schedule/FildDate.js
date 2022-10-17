import FildTime from './FildTime';

export default class FildDate {
	constructor(date = new Date(), fildsTime = new Array(new FildTime())) {
		this.date = date.toLocaleDateString();
		this.fildsTime = fildsTime;
	}
}
