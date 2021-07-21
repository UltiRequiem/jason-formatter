const fs = require("fs").promises;

function format(text) {
  return JSON.stringify(JSON.parse(text), null, 4);
}

async function writeFile(file) {
  if (!file) throw new Error("You have to pass a file!");

  const raw = await fs.readFile(file, "utf-8");
  fs.writeFile(file, format(raw)).then(() => console.log("JSON Formated :)"));
}

function init() {
  writeFile(process.argv[2]);
}

module.exports = { init, format };
