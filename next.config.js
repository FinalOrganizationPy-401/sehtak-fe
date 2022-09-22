/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    unoptimized:true , minimumCasheTTL: 60,
  }
}

module.exports = nextConfig
