import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// `npm run build` is plain `next build`, so the default build command is safe
// (no recursion). The Cloudflare project's Build command runs
// `npx opennextjs-cloudflare build`, which calls `next build` internally.
export default defineCloudflareConfig();
