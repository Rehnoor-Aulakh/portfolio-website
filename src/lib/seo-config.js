// Single source of truth for the deployed URL, so metadataBase, robots.txt
// and sitemap.xml can never drift out of sync with each other.
//
// Set NEXT_PUBLIC_SITE_URL in your Vercel project's Environment Variables
// to your real production domain (e.g. https://loomdigital.dev, or your
// *.vercel.app URL if you haven't attached a custom domain yet). Without
// it, canonical links / sitemap / robots.txt will all point at the
// fallback below, which is almost certainly wrong for your deployment.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://loom-digital.vercel.app'
