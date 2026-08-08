export type Project = {
	title: string;
	description: string;
	tags: string[];
	href: string;
};

export type PostMeta = {
	title: string;
	date: string;
	description: string;
};

export type Post = PostMeta & {
	slug: string;
};
