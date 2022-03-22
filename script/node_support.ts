import { buildPackage } from "https://deno.land/x/ultirequiem/node_support.ts";

await buildPackage({
  repoName: "jason-formatter",
  description: "Shell utility and Library for formatting JSON files",
  homepage: "https://jason.js.org",
  keywords: ["json", "formatter"],
  version: "2.0.1",
});
