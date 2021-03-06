import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.17/node_support.ts";

buildPackage(
  {
    repoName: "jason-formatter",
    description: "Shell utility and Library for formatting JSON files",
    homepage: "https://jason.js.org",
    keywords: ["json", "formatter"],
    version: "2.2.0",
  },
  {
    supportCJS: false,
    check: false,
    entryPoints: [
      "./mod.ts",
      { path: "./jason.ts", name: "jason", kind: "bin" },
    ],
  },
);
