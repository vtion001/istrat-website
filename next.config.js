/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: "/Users/archerterminez/Desktop/REPOSITORY/IStrat Website/istrat-website",
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'www.istratmc.com' },
    ],
  },
}

module.exports = nextConfig
