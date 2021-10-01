// next.config.js
module.exports = {
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/sang-le-tech",
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }

    return config;
  },
};
