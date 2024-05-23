/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGAR_EMAIL: process.env.MONGAR_EMAIL,
  },
};

export default nextConfig;
