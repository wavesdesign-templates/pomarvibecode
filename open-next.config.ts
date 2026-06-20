import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig();

// Build the Next.js app via a dedicated script so `opennextjs-cloudflare build`
// invokes `next build` directly instead of recursing into `npm run build`
// (which is itself the OpenNext build). Without this, the two call each other
// forever. See package.json "build:next".
export default { ...config, buildCommand: "npm run build:next" };
