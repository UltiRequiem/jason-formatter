/**
 * @param {string} text
 * @param {Object} config
 * @returns {string} The formatted text
 */
function format(text, { tabs = 2 }) {
  return JSON.stringify(JSON.parse(text), null, tabs)
}

// Export Format Function
module.exports = format
