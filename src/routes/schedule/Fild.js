import SubFild from './SubFild';

export default class Fild {
	constructor(date = new Date(), subfilds = new Array(new SubFild())) {
		this.date = date;
		this.subfilds = subfilds;
	}
}
