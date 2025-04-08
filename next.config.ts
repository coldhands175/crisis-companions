/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for Netlify
  output: 'export',
  
  // Disable image optimization during export
  images: {
    unoptimized: true,
  },
  
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
  
  // Disable server components for static export
  reactStrictMode: true,
};

module.exports = nextConfig;
