import { error } from '@sveltejs/kit';
import type { PostMeta } from '$lib/types';

export async function load({ params }) {
	try {
		const post = await import(`../../../lib/posts/${params.slug}.md`);
		return {
			content: post.default,
			meta: post.metadata as PostMeta
		};
	} catch {
		error(404, 'Post not found');
	}
}
