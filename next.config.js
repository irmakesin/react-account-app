/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["encrypted-tbn0.gstatic.com"],
  },
  async rewrites() {
    return [
      {
        source: "/list",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
