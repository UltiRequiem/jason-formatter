import colors from 'colors/safe'

export function print(text: string): void {
  console.log(colors.rainbow(text))
}

export function error(text: string): void {
  console.log(colors.red(text))
  process.exit(0)
}
