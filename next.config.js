/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fonts.googleapis.com", "fonts.gstatic.com", "blog.ablebooksafrica.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  devIndicators:false,
}

module.exports = nextConfig

