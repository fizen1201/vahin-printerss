import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fizen1201.github.io',
      },
    ],
    unoptimized: true,
  },
}

export default nextConfig
