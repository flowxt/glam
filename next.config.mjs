/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/onglerie",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
