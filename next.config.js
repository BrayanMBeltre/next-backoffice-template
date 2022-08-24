/** @type {import('next').NextConfig} */

// Add required envs in this file
require('./src/lib/utils/env');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
};

module.exports = nextConfig;
