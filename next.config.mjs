// const path = require('path');
import path from 'path';
import config from './isograph.config.json' with { type: 'json' };

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    swcPlugins: [
      [
        '@isograph/plugin-swc',
        {
          root_dir: '/Users/rbalicki/code/quickstart/',
          config,
        },
      ],
    ],
  },
};

export default nextConfig;
