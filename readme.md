# Jason Formatter

[![npm](https://img.shields.io/npm/v/jason-formatter?logo=npm&color=cb3837)](https://www.npmjs.com/package/jason-formatter)
[![npm downloads](https://img.shields.io/npm/dm/jason-formatter?color=cb3837)](https://www.npmjs.com/package/jason-formatter)
[![CI](https://github.com/UltiRequiem/jason-formatter/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/jason-formatter/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/jason-formatter/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/jason-formatter)

A simple [JSON](https://json.org) formatter.

## Usage

ESM only, types included: the same import works in Node.js, Bun and browsers.

```typescript
import { jason } from "jason-formatter";

const data = `{"nick":9}`;

jason(data); /* {
  "nick": 9
}*/
```

## Note

It's basically a wrapper around
[JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
😆

## Support

Open an Issue, I will check it as soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Don't forget to star the repo ⭐

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/jason-formatter/tags) 🏷️

## Licence

Licensed under the MIT License 📄
