import { MetadataRoute } from 'next';
import { environment } from '@/components/environment';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://usecheetah.com';

  // Define static routes
  const routes = [
    '',
    '/blog',
    '/pricing',
    '/partners',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Fetch blogs to add to sitemap
  try {
    const res = await fetch(`${environment.URL}/blogs`, {
        next: { revalidate: 3600 } // revalidate every hour
    });
    const blogsData = await res.json();
    const blogs = blogsData?.data || blogsData || [];

    const blogRoutes = blogs.map((post: any) => ({
      url: `${baseUrl}/post/${post.slug}`,
      lastModified: new Date(post.updated_at || post.created_at),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    return [...routes, ...blogRoutes];
  } catch (error) {
    console.error('Sitemap generation error:', error);
    return routes;
  }
}
