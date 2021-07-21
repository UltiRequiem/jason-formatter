const fs = require('fs').promises;

/**
 * @param {string} text
 * @returns {string} The formatted text
 */
function format(text, { tabs = 2 }) {
  return JSON.stringify(JSON.parse(text), null, tabs);
}

/**
 * @param {string} file
 * @param {Object} config Configuration options
 */
async function writeFile(file, config) {
  if (!file) throw new Error('You have to pass a file!');

  const raw = await fs.readFile(file, 'utf-8');
  fs.writeFile(file, format(raw, config)).then(() =>
    console.log('JSON Formated :)')
  );
}

/** Init Function: Start the process */
function init() {
  const config = {
    tabs: parseInt(process.argv[3], 10) || 2
  };
  writeFile(process.argv[2], config);
}

// Export Init and format function.
module.exports = { init, format };
