const fs = require('fs').promises;

/**
 * @param {string} text
 * @returns {string} The formatted text
 */
function format(text) {
  return JSON.stringify(JSON.parse(text), null, 4);
}

/** @param {string} file */
async function writeFile(file) {
  if (!file) throw new Error('You have to pass a file!');

  const raw = await fs.readFile(file, 'utf-8');
  fs.writeFile(file, format(raw)).then(() => console.log('JSON Formated :)'));
}

/** Init Function: Start the process */
function init() {
  writeFile(process.argv[2]);
}

// Export Init and format function.
module.exports = { init, format };
