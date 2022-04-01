import { parse } from "https://deno.land/std@0.133.0/flags/mod.ts";
import { jason } from "./mod.ts";

const { _: files, tabs } = parse(Deno.args, { alias: { t: "tabs" } });

const parsedFiles = files.map((file) => file.toString());

const textOfFiles = await Promise.all(
  parsedFiles.map((file) => Deno.readTextFile(file)),
);

const formatted = textOfFiles.map((text) => jason(text, { tabs }));

await Promise.all(
  parsedFiles.map((file, i) => Deno.writeTextFile(file, formatted[i])),
);

console.log("Done!");
