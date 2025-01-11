/** @type {import('next').NextConfig} */
const nextConfig = {
    // Environment variables to expose to the client-side
    env: {
      POSTGRES_URL: process.env.POSTGRES_URL,
    },
  };

export default nextConfig;
