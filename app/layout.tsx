import type { Metadata } from 'next';
import './globals.css';

const faviconSvg = encodeURIComponent(`
<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 22 L65 30.66 L50 39.32 L35 30.66 Z" fill="#059669" />
  <path d="M50 4 L86 24.78 L71 33.44 L50 21.32 L29 33.44 L14 24.78 Z" fill="#34D399" />
  <path d="M11 29 L47 49.78 L47 91.34 L31 82.1 L31 61 L27 58.7 L27 79.8 L11 70.56 Z" fill="#10B981" />
  <path d="M89 29 L53 49.78 L53 91.34 L69 82.1 L69 61 L73 58.7 L73 79.8 L89 70.56 Z" fill="#064E3B" />
</svg>
`);

export const metadata: Metadata = {
  metadataBase: new URL('https://buildwithmei.com'),
  title: {
    default: 'MEI Innovations | AI, Automation & Custom Software for Every Business',
    template: '%s | MEI Innovations',
  },
  description: 'MEI Innovations builds custom automation, CRM, web, and software solutions for startups, SMEs, and growing international businesses. From your first website to full operational infrastructure — a digital journey since 2014.',
  keywords: [
    'AI transformation', 'AI automation solutions', 'business automation', 'custom software development',
    'digital transformation', 'AI workforce', 'workflow automation', 'CRM solutions',
    'smart infrastructure', 'ecommerce development', 'web development agency', 'intelligent ecosystems',
    'MEI Innovations', 'operational software', 'client portals', 'business systems'
  ],
  authors: [{ name: 'MEI Innovations', url: 'https://buildwithmei.com' }],
  creator: 'MEI Innovations',
  publisher: 'MEI Innovations',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://buildwithmei.com',
    siteName: 'MEI Innovations',
    title: 'MEI Innovations | AI, Automation & Custom Software for Every Business',
    description: 'MEI connects your CRM, automation, and customer-facing systems into one operational layer — built, integrated, and supported by one team. Digital journey since 2014.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MEI Innovations — Modern Ecosystem Intelligence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEI Innovations | AI, Automation & Custom Software',
    description: 'MEI connects your CRM, automation, and customer-facing systems into one operational layer. Digital journey since 2014.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://buildwithmei.com' },
  icons: { icon: `data:image/svg+xml,${faviconSvg}` },
};


const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://buildwithmei.com/#organization',
      name: 'MEI Innovations',
      alternateName: 'Modern Ecosystem Intelligence',
      url: 'https://buildwithmei.com',
      slogan: 'Innovate • Integrate • Elevate',
      description: "MEI Innovations builds intelligent ecosystems connecting businesses, customers, teams, data, AI, digital systems, and physical environments. MEI's digital journey started in 2014 through technology ventures and evolved into intelligent ecosystems.",
      foundingDate: '2014',
      email: 'info@buildwithmei.com',
      logo: 'https://buildwithmei.com/og-image.png',
      sameAs: [
        'https://www.instagram.com/mei.innovations/',
        'https://www.facebook.com/meiinnovations',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'info@buildwithmei.com',
        telephone: '+41779513495',
        availableLanguage: ['English'],
      },
      makesOffer: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI & Business Automation', description: 'Practical AI automation built into existing business systems — document processing, workflow automation, and AI workforce solutions.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software & Web Development', description: 'Custom software platforms, business applications, websites, and ecommerce built for how each operation works.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM & Business Systems', description: 'Unified CRM ecosystems, client portals, and operational dashboards that replace disconnected tools.' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Transformation', description: 'Migration of legacy operations to modern, scalable, intelligent infrastructure — strategy, build, and transition.' } },
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://buildwithmei.com/#service',
      name: 'MEI Innovations — Technology & AI Transformation Services',
      url: 'https://buildwithmei.com',
      parentOrganization: { '@id': 'https://buildwithmei.com/#organization' },
      description: 'Custom software, AI automation, CRM ecosystems, ecommerce, and intelligent infrastructure for businesses at every stage — from first website to full AI workforce. Serving international clients since 2014.',
      areaServed: ['United States', 'United Kingdom', 'Europe', 'United Arab Emirates', 'Canada', 'Saudi Arabia', 'Worldwide'],
      knowsAbout: [
        'AI transformation', 'business automation', 'custom software development', 'CRM ecosystems',
        'ecommerce development', 'AI workforce', 'computer vision', 'smart infrastructure',
        'hospitality technology', 'healthcare technology', 'real estate technology',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://buildwithmei.com/#website',
      url: 'https://buildwithmei.com',
      name: 'MEI Innovations',
      publisher: { '@id': 'https://buildwithmei.com/#organization' },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0B1020] text-[#F8FAFC] antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
