import '../index.css'
import { SITE_URL } from '../lib/seo-config'

export const viewport = {
  themeColor: '#18211f',
  colorScheme: 'light',
}

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Loom Digital | AI Agents, Chatbots & Web Development Agency | USA UK EU AUS',
  description: 'Loom Digital — Expert AI agents, custom chatbots, ML implementation & premium web development. Rehnoor Aulakh & Jatin Kalra serve clients across USA, UK, EU & Australia. Get a free consultation today.',
  keywords: [
    'AI agents',
    'chatbot development',
    'machine learning',
    'web development agency',
    'React developers',
    'Next.js development',
    'custom AI solutions',
    'LLM integration',
    'automation',
    'digital agency',
    'USA UK Australia',
  ],
  authors: [{ name: 'Rehnoor Aulakh' }, { name: 'Jatin Kalra' }],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Loom Digital | AI Agents, Chatbots & Web Development Agency',
    description: 'Expert AI agents, chatbots & web development. Serving USA, UK, EU & Australia. Get a free consultation.',
    siteName: 'Loom Digital',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loom Digital | AI Agents, Chatbots & Web Development Agency',
    description: 'Expert AI agents, chatbots & web development. Serving USA, UK, EU & Australia.',
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Loom Digital',
    url: SITE_URL,
    description: 'AI agents, chatbot development, ML implementation and premium web development agency serving USA, UK, EU and Australia.',
    foundingDate: '2024',
    founders: [
      { '@type': 'Person', name: 'Rehnoor Aulakh', url: 'https://github.com/Rehnoor-Aulakh' },
      { '@type': 'Person', name: 'Jatin Kalra', url: 'https://github.com/jatinkalra1710' },
    ],
    knowsAbout: ['Artificial Intelligence', 'Machine Learning', 'Chatbot Development', 'Web Development', 'React', 'Next.js', 'Python', 'LLM Integration', 'AI Agents'],
    areaServed: ['United States', 'United Kingdom', 'European Union', 'Australia'],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'jatinkalra0111@gmail.com',
      contactType: 'sales',
      availableLanguage: ['English'],
    },
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
