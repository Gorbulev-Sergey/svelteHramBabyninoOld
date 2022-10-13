// @ts-nocheck
import SubFild from './SubFild';

export default class Fild {
	constructor(date = new Date(), subfilds = new Array(new SubFild())) {
		this[
			new Intl.DateTimeFormat('ru', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})
				.format(date)
				.replace(' г.', '')
		] = subfilds;
	}
}
