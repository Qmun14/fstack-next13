/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/photo/2012/04/26/19/43/profile-42914__340.png',
      },
    ],
  },
}

module.exports = nextConfig
