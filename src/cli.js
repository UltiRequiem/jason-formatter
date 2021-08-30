#!/usr/bin/env node

const fs = require('fs/promises')
const jason = require('./index')

/**
 * @param {string} file
 * @param {Object} config Configuration options
 */
async function writeFile(file, config) {
  if (!file) {
    console.log('You have to pass a file!')
    process.exit()
  }

  await fs.writeFile(file, jason(await fs.readFile(file, 'utf-8'), config))
  console.log('JSON Formatted :)')
}

/** Init Function: Start the process */
async function main() {
  const config = {
    tabs: parseInt(process.argv[3], 10) || 2,
  }
  await writeFile(process.argv[2], config)
}

main()
