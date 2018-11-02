# assert [![Build Status](https://travis-ci.org/tjoskar/assert.svg?branch=master)](https://travis-ci.org/tjoskar/assert) [![codecov](https://codecov.io/gh/tjoskar/assert/branch/master/graph/badge.svg)](https://codecov.io/gh/tjoskar/assert)

> Simple assert lib


## Install

```
$ npm install @tjoskar/assert
```


## Usage

```js
import { is, isNot } from '@tjoskar/assert'

is(true, true) // OK
is(true, false) // Throws `true is not equal to false`

isNot(true, false) // OK
isNot(true, true) // Throws `true is equal to true`
```

## License

MIT
