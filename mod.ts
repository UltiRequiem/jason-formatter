export type JasonConfig = { tabs?: number };

/**
 * @param text - The JSON to format.
 * @param config - The configuration.
 *
 * @returns The formatted JSON.
 */
export function jason(text: string, config: JasonConfig = {}): string {
  const { tabs = 2 } = config;

  return JSON.stringify(JSON.parse(text), null, tabs) + '\n';
}
