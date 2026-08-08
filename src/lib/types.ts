export enum STATUS {
  DONE,
  DOING,
  DRAFT,
}
export type Project = {
  title: string;
  status: STATUS;
  description: string;
  tags: string[];
  href: string;
  link?: string;
  source?: string;
};

export type PostMeta = {
  title: string;
  date: string;
  description: string;
};

export type Post = PostMeta & {
  slug: string;
};
