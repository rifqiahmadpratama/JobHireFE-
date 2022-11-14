/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REACT_APP_API_BACKEND: process.env.REACT_APP_API_BACKEND,
  },
};

module.exports = nextConfig;
