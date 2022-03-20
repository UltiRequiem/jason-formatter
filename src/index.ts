/**
 * Returns a string with a formatted JSON.
 *
 * @param text - The JSON to format
 * @param config - The configuration
 */
export default function jason(text: string, config: { tabs?: 2 } = {}): string {
  return JSON.stringify(JSON.parse(text), null, config.tabs ?? 2)
}
