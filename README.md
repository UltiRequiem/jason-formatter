# Jason

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/jason-formatter?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/jason-formatter/workflows/CodeQL/badge.svg)
![Eslint](https://github.com/UltiRequiem/jason-formatter/workflows/Eslint/badge.svg)

A simple [json](https://json.org) formmater.

![Cover](./assets/cover.png)

## Installation

To be able to use it in your entire system you have to install globally:

```bash
npm i -g jason
```

If you use yarn:

```bash
yarn global add jason
```

## Usage

Now you can use it anywhere on your system:

```bash
jason config.json
```

By default, 2 tabs are used, but you can also specify how many tabs you want:

```bash
jason config.json 4
```

Jason is also a library, so you can also import it in your code.

Example using CommonJS:

```javascript
const jason = require('jason-formatter').default

const rawData = `
{

  "hey":9   ,
  "jason":true
}

`

console.log(jason(rawData, { tabs: 2 }))
```
