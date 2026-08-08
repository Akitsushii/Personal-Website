import type { Post, PostMeta } from './types';

const modules = import.meta.glob('./posts/*.md', { eager: true });

export function getPosts(): Post[] {
	const posts: Post[] = [];

	for (const path in modules) {
		const mod = modules[path] as { metadata: PostMeta };
		const slug = path.split('/').pop()?.replace('.md', '') ?? '';
		posts.push({ slug, ...mod.metadata });
	}

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
