export class Comment {
	constructor(text, created = new Date().toLocaleDateString(), userUID, postUID) {
		this.text = text;
		this.created = created;
		this.userUID = userUID;
		this.postUID = postUID;
	}
}
