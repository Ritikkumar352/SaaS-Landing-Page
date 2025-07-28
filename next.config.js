/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'dummyimage.com'],
  },
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig 