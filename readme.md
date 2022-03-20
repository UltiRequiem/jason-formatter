# Jason Formatter

A simple [json](https://json.org) formatter.

## Installation

To be able to use it in your entire system you have to install globally:

```bash
npm install -global jason-formatter
```

## CLI Tool Usage

Now you can use it anywhere on your system:

```bash
jason config.json
```

By default, 2 tabs are used, but you can also specify how many tabs you want:

```bash
jason config.json 4
```

## Library

Jason is also a library, so you can also import it in your code:

```javascript
import jason from 'jason-formatter'

const rawData = `
{

  "hey":9   ,
  "jason":true
}

`

console.log(jason(rawData, { tabs: 2 }))
```

## License

This project is licensed under the [MIT License](./LICENSE.md).
