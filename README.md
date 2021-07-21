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

You can also import it in your code:

```javascript
// Good Old require
const { format } = require('jason-formatter');

// New Syntax
import { format } from 'jason-formatter';
```

You can see an example of use in [test/formatter.js](./tests/formater.js).
