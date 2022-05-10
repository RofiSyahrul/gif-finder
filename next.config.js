const giphyDomains = Array.from({ length: 30 }, (_, index) => `media${index}.giphy.com`);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.giphy.com', ...giphyDomains]
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
