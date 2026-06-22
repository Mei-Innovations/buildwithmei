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
  description: 'MEI Innovations builds custom automation, CRM, web, and software solutions for startups, SMEs, and growing businesses worldwide. From your first website to full operational infrastructure — established 2014.',
  keywords: [
    'AI automation', 'custom software development', 'CRM solutions', 'business automation',
    'web development agency', 'workflow automation', 'SaaS development', 'ecommerce development',
    'digital transformation', 'small business software', 'startup technology', 'MEI Innovations',
    'operational software', 'client portals', 'business systems'
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
    description: 'From your first website to full operational automation — MEI builds technology that helps businesses at every stage grow faster. Est. 2014.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MEI Innovations' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEI Innovations | AI, Automation & Custom Software',
    description: 'Custom software, AI automation, CRM, and web development for businesses at every stage. Worldwide. Est. 2014.',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://buildwithmei.com' },
  icons: { icon: `data:image/svg+xml,${faviconSvg}` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0B1020] text-[#F8FAFC] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
