/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination:"/api/"
      },
    ]
  },
};

module.exports = nextConfig;
