import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'CCBot', 'anthropic-ai', 'Claude-Web', 'ClaudeBot', 'Omgilibot', 'Omgili', 'PerplexityBot', 'YouBot'],
        allow: ['/', '/blog', '/pricing', '/partners'],
        disallow: ['/admin', '/api'],
      },
    ],
    sitemap: 'https://usecheetah.com/sitemap.xml',
  };
}
