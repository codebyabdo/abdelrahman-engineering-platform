export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  category: string;
  tags: string[];
  content: string;
  featured?: boolean;
}