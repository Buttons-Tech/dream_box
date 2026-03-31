import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['illustrations.popsy.co', 'i.pravatar.cc'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.transparenttextures.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
