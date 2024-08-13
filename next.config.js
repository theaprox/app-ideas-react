/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Load images from ** hosts...
   */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
