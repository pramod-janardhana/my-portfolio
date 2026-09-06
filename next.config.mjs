/** @type {import('next').NextConfig} */
// Project site served under https://pramod-janardhana.github.io/portfolio/.
const basePath = "/portfolio";

const nextConfig = {
  reactStrictMode: true,
  // Static HTML export to `out/` for GitHub Pages.
  output: "export",
  // Emit `route/index.html` so GitHub Pages serves clean URLs without a server.
  trailingSlash: true,
  // Serve everything under the repo subpath; auto-applies to <Link> and assets.
  basePath,
  // Exposed so raw anchors (not handled by <Link>) can prefix the subpath.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
