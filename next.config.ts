

import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    env: {
        url: process.env.BACKEND_URL,
        urlLocal: `${process.env.BACKEND_URL_LOCAL}/api`,
        apiUrl: `${process.env.BACKEND_URL}/api`,
        IMAGE_URL: `${process.env.BACKEND_URL}/file/images/`,
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);