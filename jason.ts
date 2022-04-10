import { Command } from "https://deno.land/x/cliffy@v0.22.2/command/mod.ts";
import { colors } from "https://deno.land/x/cliffy@v0.22.2/ansi/mod.ts";
import { jason } from "./mod.ts";

const root = new Command()
  .name("jason")
  .version("2.1.0")
  .description("Easily format JSON files.")
  .arguments("<files...:string>")
  .option("-t, --tabs", "Quantity of tabs to use.")
  .option("-v, --verbose", "Log when a file is formatted.");

const {
  args: [files],
  options: { tabs, verbose },
} = await root.parse(Deno.args);

async function jasonFile(file: string) {
  const text = await Deno.readTextFile(file);
  const formatted = jason(text, { tabs });
  await Deno.writeTextFile(file, formatted);

  if (verbose) {
    console.log(colors.green(`The file "${colors.blue(file)}" was formatted.`));
  }
}

await Promise.all(files.map(jasonFile));

if (verbose) {
  console.log(colors.green("Done!"));
}
