# REWRITING ON PROGRESS

# Jason Formatter

A simple [json](https://json.org) formatter.

## CLI

### Installation

- [Node.js](https://nodejs.org/en)

```sh
npm install -g ranmess
```

### Usage

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
import jason from "jason-formatter";

const rawData = "{"hey":9,"jason":true}";

console.log(jason(rawData, { tabs: 2 }));
```

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/intent/tweet?text=%40UltiRequiem%20) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like my work 🚀

Don't forget to start the repo ⭐

## Licence

Licensed under the MIT License.
