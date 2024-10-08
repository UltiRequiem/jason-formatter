import { Command } from "https://deno.land/x/cliffy@v1.0.0-rc.4/command/mod.ts";
import { colors } from "https://deno.land/x/cliffy@v1.0.0-rc.4/ansi/mod.ts";
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

const process = { success: 0, fail: 0 };

async function jasonFile(file: string) {
  const text = await Deno.readTextFile(file);

  let formatted;

  try {
    formatted = jason(text, { tabs });
  } catch {
    console.log(
      colors.red(`The file "${colors.red(file)}" is not valid JSON!`),
    );
    process.fail++;
    return;
  }

  await Deno.writeTextFile(file, formatted);

  process.success++;

  if (verbose) {
    console.log(colors.green(`The file "${colors.blue(file)}" was formatted.`));
  }
}

await Promise.all(files.map(jasonFile));

if (verbose) {
  console.log(colors.green("Done!"));
  console.log(
    colors.cyan(
      `${process.success} files were formatted successfully, ${process.fail} failed.`,
    ),
  );
}
