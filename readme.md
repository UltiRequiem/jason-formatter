# Jason Formatter

[![Code Coverage](https://codecov.io/gh/ultirequiem/jason-formatter/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/jason-formatter)
[![Deno Doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/jason_formatter/mod.ts)

A simple [JSON](https://json.org) formatter.

## CLI

### Install

- **Deno 🎃**

```sh
deno install --unstable --allow-read --allow-write https://deno.land/x/jason_formatter/jason.ts
```

- **Node.js 🐼**

```sh
npm install --global jason-formatter
```

### Usage

```bash
jason config.json
```

By default, 2 tabs are used, to specify how many tabs you want 👇

```bash
jason config.json --tabs 4 # same as -t 4
```

[Video Showcase 📷](https://youtu.be/2dfXYhPswv0)

## Usage

The API is the same on all this platforms ✔️

### [Deno 🦕](https://deno.land/x/jason_formatter)

```typescript
import { jason } from "https://deno.land/x/jason_formatter/mod.ts";

const data = `{"nick":9}`;

jason(data); /* {
  "nick": 9
}*/
```

### [Node.js 🐢🚀](https://npmjs.com/package/jason-formatter)

```ts
import { jason } from "jason-formatter";
```

### [Browser 🌐](https://developer.mozilla.org/en-US/docs/Glossary/Browser)

You can use any [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) 🔥

Eg 👉
[ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) ↔️
[SkyPack](https://cdn.skypack.dev/jason-formatter) 🆚
[Script Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
↔️ [JSDelivr](https://cdn.jsdelivr.net/npm/jason-formatter)

## Documentation

Is hosted on
[Deno Doc](https://doc.deno.land/https://deno.land/x/jason_formatter/mod.ts) 📄

## Note

I did this while learning TypeScript long time ago, It was originally written
for Node.js but I'm porting most of my packages to Deno.

It's basically a wrapper around
[JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
😆

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🙏

Don't forget to star the repo ⭐

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/jason-formatter/tags) 🏷️

## Licence

Licensed under the MIT License 📄
