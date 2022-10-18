import FildDate from './FildDate';

export default class Month {
	setFildsDayAll = () => {
		for (let i = 1; i <= this.daysInMonth; i++) {
			this.fildsDayAll.push(new FildDate(new Date(this.year, this.month - 1, i)));
		}
	};
	updateFildsDayAll = () => {
		this.fildsDayNotEmpty.forEach((fDay) => {
			this.fildsDayAll[
				this.fildsDayAll.indexOf(this.fildsDayAll.filter((f) => f.date == fDay.date)[0])
			] = fDay;
		});
	};
	constructor(month = 1, year = new Date(Date.now()).getFullYear()) {
		this.month = month;
		this.year = year;

		this.daysInMonth = new Date(year, month - 1, 0).getDate();
		this.monthName = () => {
			switch (month) {
				case 0:
					return 'января';
				case 1:
					return 'февраля';
				case 2:
					return 'марта';
				case 3:
					return 'апреля';
				case 4:
					return 'мая';
				case 5:
					return 'июня';
				case 6:
					return 'июля';
				case 7:
					return 'августа';
				case 8:
					return 'сентября';
				case 9:
					return 'октября';
				case 10:
					return 'ноября';
				case 11:
					return 'декабря';
			}
		};

		this.fildsDayAll = new Array();
		this.setFildsDayAll();
		this.fildsDayNotEmpty = new Array();
		this.updateFildsDayAll();
	}
}
