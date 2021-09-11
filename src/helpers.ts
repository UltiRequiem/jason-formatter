import colors from 'colors/safe'

function print(text: string) {
  console.log(colors.rainbow(text))
}

function error(text: string) {
  console.log(colors.red(text))
  process.exit(0)
}

export { print, error }
