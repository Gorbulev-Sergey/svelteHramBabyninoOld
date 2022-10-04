export class Post {
	constructor(
		title,
		cover = new Cover(),
		description,
		content,
		created = new Date().toLocaleDateString(),
		published = false,
		tags = [],
		comments = [],
		userUID
	) {
		this.title = title;
		this.cover = cover;
		this.description = description;
		this.content = content;
		this.created = created;
		this.published = published;
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
