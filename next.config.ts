import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  env: {
    url: process.env.BACKEND_URL,
    urlLocal: `${process.env.BACKEND_URL_LOCAL}/api`,
    apiUrl: `${process.env.BACKEND_URL}/api`,
    IMAGE_URL: `${process.env.BACKEND_URL}/file/images/`,
  },
  images: {
    domains: ['nodido.com', 'api.nodido.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

// next.config.js
// import createNextIntlPlugin from 'next-intl/plugin';

// const withNextIntl = createNextIntlPlugin({
//   // timeZone: 'Asia/Tehran', // Set to your desired time zone, e.g., for Iran2
// });

// const nextConfig = {
//   env: {
//     url: process.env.BACKEND_URL,
//     urlLocal: `${process.env.BACKEND_URL_LOCAL}/api`,
//     apiUrl: `${process.env.BACKEND_URL}/api`,
//     IMAGE_URL: `${process.env.BACKEND_URL}/file/images/`,
//     NEXT_INTL_TIMEZONE: 'Asia/Tehran', // Workaround for older versions
//   },
//   eslint: {
//     // Warning: This allows production builds to successfully complete even if
//     // your project has ESLint errors.
//     ignoreDuringBuilds: true,
//   },
// };

// export default withNextIntl(nextConfig);
