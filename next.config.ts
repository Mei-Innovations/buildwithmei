import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',          // Static HTML export — GitHub Pages compatible
  trailingSlash: true,       // /services → /services/index.html — required for GH Pages routing
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,       // next/image optimization requires a server — disable for static
  },
  transpilePackages: ['motion'],
};

export default nextConfig;
