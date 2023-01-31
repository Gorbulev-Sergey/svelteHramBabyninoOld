export class Album {
	constructor(title = '', description = null, date = new Date().toISOString().slice(0, 10), photos = new Array(), cover = null) {
		this.title = title;
		this.description = description;
		this.date = date;
		this.photos = photos;
		this.cover = cover;
	}
}
