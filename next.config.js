/** @type {import('next').NextConfig} */

// Add required envs in this file
require('./src/lib/utils/env');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  // compiler: {
  //   removeConsole: {
  //     exclude: ['error'],
  //   },
  // },
  images: {
    domains: ['i.redd.it'],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
