import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost"], // Ajoutez ici le domaine de votre serveur Strapi
    // Si votre serveur Strapi est hébergé sur un autre domaine, ajoutez-le ici également
    // par exemple : ['localhost', 'votre-domaine.com']
  },
  env: {
    STRAPI_API_URL: process.env.STRAPI_API_URL,
  }
};

export default nextConfig;
