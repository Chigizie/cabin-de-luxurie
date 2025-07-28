/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "abmvtscjltfxsbkhpqhg.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabins-image/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
