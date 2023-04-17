/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["sponsorsimg.s3.ap-northeast-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
