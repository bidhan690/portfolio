/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.imgbox.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "iili.io/**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
