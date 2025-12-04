/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: "/Users/archerterminez/Desktop/REPOSITORY/IStrat Website/istrat-website",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
}

export default nextConfig
