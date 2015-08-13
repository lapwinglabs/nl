
# nl

  Convert linebreaks into newline characters (\n)

## Installation

```bash
npm install -g nl
```

## Usage

Convert to newlines from a file:

```bash
$ cat in.txt | newline > out.txt
```

Convert to newlines from your clipboard (OSX):

```bash
$ pbpaste | newline | pbcopy
```

Programmatic usage:

```js
var nl = require('nl')
nl(read('./Readme.md'))
```

## License

(The MIT License)

Copyright (c) 2015 Matthew Mueller &lt;matt@lapwinglabs.com&gt;
