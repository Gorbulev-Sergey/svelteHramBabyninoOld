import FildDate from './FildDate';

export class Month {
	setFildsDayAll = () => {
		for (let i = 1; i <= this.daysInMonth; i++) {
			this.fildsDayAll.push(new FildDate(new Date(this.year, this.month - 1, i)));
		}
	};
	updateFildsDayAll = () => {
		this.fildsDayNotEmpty?.forEach((fDay) => {
			this.fildsDayAll[
				this.fildsDayAll.indexOf(this.fildsDayAll.filter((f) => f.date == fDay.date)[0])
			] = fDay;
		});
	};
	constructor(month = 1, year = new Date(Date.now()).getFullYear()) {
		this.month = month;
		this.year = year;

		this.daysInMonth = new Date(year, month, 0).getDate();
		this.monthNameS = () => {
			switch (this.month) {
				case 1:
					return 'января';
				case 2:
					return 'февраля';
				case 3:
					return 'марта';
				case 4:
					return 'апреля';
				case 5:
					return 'мая';
				case 6:
					return 'июня';
				case 7:
					return 'июля';
				case 8:
					return 'августа';
				case 9:
					return 'сентября';
				case 10:
					return 'октября';
				case 11:
					return 'ноября';
				case 12:
					return 'декабря';
			}
		};
		this.monthName = () => {
			switch (this.month) {
				case 1:
					return 'январь';
				case 2:
					return 'февраль';
				case 3:
					return 'март';
				case 4:
					return 'апрель';
				case 5:
					return 'май';
				case 6:
					return 'июнь';
				case 7:
					return 'июль';
				case 8:
					return 'август';
				case 9:
					return 'сентябрь';
				case 10:
					return 'октябрь';
				case 11:
					return 'ноябрь';
				case 12:
					return 'декабрь';
			}
		};

		this.fildsDayAll = new Array();
		this.setFildsDayAll();
		this.fildsDayNotEmpty = new Array();
		this.updateFildsDayAll();
	}
}
