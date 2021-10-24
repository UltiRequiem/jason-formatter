import fs from 'fs/promises'

import jason from '..'
import { Config } from '../types'
import { print, error } from './helpers'

/**
 * Format and write file with a configuration.
 *
 * @param file - The file to be formatted
 * @param config - The configuration
 */
async function writeFile(file: string, config: Config) {
  if (!file) error('You have to pass a file!')

  await fs.writeFile(file, jason(await fs.readFile(file, 'utf-8'), config))
  print('JSON Formatted :)')
}

/** Init Function: Start the process */
export default async function main(): Promise<void> {
  await writeFile(process.argv[2], {
    tabs: parseInt(process.argv[3], 10) || 2
  })
}
