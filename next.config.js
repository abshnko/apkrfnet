/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net"],
    remotePatterns: [
      {
          protocol: 'https',
          hostname: '**.vercel.app',
      },
  ],
  }
};

module.exports = nextConfig;
