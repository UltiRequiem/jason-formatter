import colors from 'colors/safe'

function print(text: string): void {
  console.log(colors.rainbow(text))
}

function error(text: string): void {
  console.log(colors.red(text))
  process.exit(0)
}

export { print, error }
