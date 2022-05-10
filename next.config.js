const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');

const isProd = process.env.NODE_ENV === 'production';

const giphyDomains = Array.from({ length: 30 }, (_, index) => `media${index}.giphy.com`);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.giphy.com', ...giphyDomains]
  },
  reactStrictMode: true,
};

module.exports = withPlugins(
  [
    withPWA,
    {
      pwa: {
        disable: !isProd,
        dest: 'public',
        buildExcludes: [/middleware-manifest\.json$/],
        fallbacks: {
          image: '/images/no-internet.jpg'
        }
      }
    }
  ],
  nextConfig
);
