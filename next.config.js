/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

// let baseUrl = 'https://development.com'

// if (process.env.NEXT_PUBLIC_APP_ENV === 'production') {
//   baseUrl = 'https://production.com'
// }

const nextConfig = nextTranslate({
  reactStrictMode: false,
  images: {
    domains: ["cdn.iman.uz"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // env: {
  //   BASE_URL: baseUrl,
  // },
});

module.exports = nextConfig;
