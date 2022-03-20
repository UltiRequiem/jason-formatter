export type JasonConfig = { tabs?: number };

/**
 * @param text - The JSON to format.
 * @param config - The configuration.
 *
 * @returns The formatted JSON.
 */
export function jason(text: string, config?: JasonConfig): string {
  return JSON.stringify(JSON.parse(text), null, config?.tabs ?? 2);
}
