import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://verori.app'

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },

    { url: `${baseUrl}/templates`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/templates/project-sign-off-form`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/templates/deliverable-acceptance-letter`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/templates/client-approval-email`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    { url: `${baseUrl}/for/brand-consultants`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    { url: `${baseUrl}/compare/verori-vs-email`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    { url: `${baseUrl}/guides/client-never-approved`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    { url: `${baseUrl}/login`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
