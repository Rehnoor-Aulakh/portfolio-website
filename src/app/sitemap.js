import { SITE_URL } from '../lib/seo-config'

// One-page site — a single canonical entry is correct here. If you ever
// split sections (e.g. /work, /services) into real routes, add them here.
export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
