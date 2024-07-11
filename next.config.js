/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com"
      },
      {
        protocol: "https",
        hostname: "dqxo3sy8m0qh1.cloudfront.net", //"finestdeals-bucket.s3.ap-south-1.amazonaws.com"
      }
    ],
  },
};

module.exports = nextConfig;
