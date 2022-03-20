import { parse } from "https://deno.land/std@0.128.0/flags/mod.ts";
import { jason } from "./mod.ts";

const { _: files, tabs } = parse(Deno.args);

const textOfFiles = await Promise.all(files.map(Deno.readTextFile));

const formatted = textOfFiles.map((text) => jason(text, { tabs }));

await Promise.all(
  files.map((file, i) => Deno.writeTextFile(file, formatted[i]))
);

console.log("Done!");
