/** @type {import('next').NextConfig} */
const nextConfig = {
  // Les images sont pré-compressées dans /public/photo : on sert les fichiers
  // directement, sans passer par l'optimiseur Vercel (quota gratuit dépassé → erreurs 402).
  images: {
    unoptimized: true,
  },
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
