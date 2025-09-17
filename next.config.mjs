import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import config from './isograph.config.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    swcPlugins: [
      [
        '@isograph/plugin-swc',
        {
          root_dir: __dirname,
          config,
        },
      ],
    ],
  },
};

export default nextConfig;
