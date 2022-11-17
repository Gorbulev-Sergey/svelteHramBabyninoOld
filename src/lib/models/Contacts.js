export class Contacts {
	constructor(
		scheduleOfWork = new Array(),
		phones = new Array(),
		socialNetworks = new Array(),
		address = { title: '', yandexMapsUrl: '' }
	) {
		this.scheduleOfWork = scheduleOfWork;
		this.phones = phones;
		this.socialNetworks = socialNetworks;
		this.address = address;
	}
}
