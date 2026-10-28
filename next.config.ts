import { withArkEnv } from "@arkenv/nextjs/config";
import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const baseConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  reactStrictMode: true,
  devIndicators: {
    position: "bottom-right",
  },
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

const withNextIntl = createNextIntlPlugin({
  requestConfig: "./src/shared/config/nextIntl/request.ts",
});

export default withArkEnv(withBundleAnalyzer(withNextIntl(baseConfig)));
