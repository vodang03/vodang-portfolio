import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  // Thêm dòng này nếu cần thiết để ép transpile module (tùy phiên bản Next)
  transpilePackages: ["framer-motion", "react-icons"],
};

export default nextConfig;
