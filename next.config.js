/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    nextConfig,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
        },
      ],
    },
  }