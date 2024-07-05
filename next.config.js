/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DELIVERY_API_TOKEN: process.env.DELIVERY_API_TOKEN,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
  // video config loader
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(mov|mp4)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "assets/",
            outputPath: "assets/",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
