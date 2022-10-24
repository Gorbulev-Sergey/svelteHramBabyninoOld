export class Post {
	constructor(
		title = null,
		cover = new Cover(),
		description = null,
		content = null,
		created = new Date(Date.now()).toDateString(),
		published = false,
		pinned = false,
		inverted = null,
		tags = new Array(),
		comments = new Array(),
		userUID = null
	) {
		this.title = title;
		this.cover = cover;
		this.description = description;
		this.content = content;
		this.created = created;
		this.published = published;
		this.pinned = pinned;
		this.inverted = inverted;
		this.tags = tags;
		this.comments = comments;
		this.userUID = userUID;
	}
}

class Cover {
	constructor(image = null, video = null) {
		this.image = image;
		this.video = video;
	}
}
