import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/', '/p/'],
    },
    sitemap: 'https://verori.app/sitemap.xml',
  }
}
