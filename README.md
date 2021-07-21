# Jason

A Command Line formatter for JSON files, zero dependencies.

![Cover](./assets/cover.png)

## Installation and Usage

To be able to use it in your entire system you have to install globally:

```bash
npm i -g jason-formatter
```

Now you can use it anywhere on your system:

```bash
jason config.json
```

By default 2 tabs are used, but you can also specify how many tabs you want:

```bash
jason config.json 4
```

You can also import it in your code:

```javascript
// Good Old require
const { format } = require('jason-formatter');

// New Syntax
import { format } from 'jason-formatter';

console.log(format(rawData, { tabs: 2 }));
```

You can see an example of use in [test/formatter.js](./tests/formater.js).
