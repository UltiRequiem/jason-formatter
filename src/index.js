const fs = require("fs").promises;

async function format(file) {
  if (!file) throw new Error("You have to pass a file!");

  const raw = await fs.readFile(file, "utf-8");
  const data = JSON.stringify(JSON.parse(raw), null, 4);
  fs.writeFile(file, data).then(() => console.log("JSON Formated :)"));
}

function init() {
  format(process.argv[2]);
}

module.exports = { init };
