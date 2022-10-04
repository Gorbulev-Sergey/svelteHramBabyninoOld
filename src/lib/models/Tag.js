export class Tag {
	constructor(title, description, created = new Date().toLocaleDateString()) {
		this.title = title;
		this.description = description;
		this.created = created;
	}
}
