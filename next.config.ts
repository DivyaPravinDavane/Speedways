import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/#services",
        permanent: false,
      },
      {
        source: "/services/:path*",
        destination: "/#services",
        permanent: false,
      },
      {
        source: "/fleet",
        destination: "/#fleet",
        permanent: false,
      },
      {
        source: "/network-safety",
        destination: "/#network",
        permanent: false,
      },
      {
        source: "/safety",
        destination: "/#safety",
        permanent: false,
      },
      {
        source: "/sustainability",
        destination: "/#sustainability",
        permanent: false,
      },
      {
        source: "/technology",
        destination: "/#product",
        permanent: false,
      },
      {
        source: "/about-us",
        destination: "/#about",
        permanent: false,
      },
      {
        source: "/customers",
        destination: "/#customers",
        permanent: false,
      },
      {
        source: "/leadership",
        destination: "/#leadership",
        permanent: false,
      },
      {
        source: "/investors",
        destination: "/#about",
        permanent: false,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
