/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    curstomKey: 'customValue',
  },
  // basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: '/hello',
        permanet: true,
      },
    ];
  },
}

module.exports = nextConfig
