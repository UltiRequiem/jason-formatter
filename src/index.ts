import { Config } from './types'

/**
 * Returns a string with a formatted JSON.
 *
 * @param text - The JSON to format
 * @param config - The configuration
 */
function jason(text: string, config: Config): string {
  return JSON.stringify(JSON.parse(text), null, config.tabs || 2)
}

export default jason
