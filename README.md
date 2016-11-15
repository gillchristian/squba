# squba

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Safely access deeply nested properties.

### Install

```bash
npm i -S squba
```
or

```bash
npm i -S squba
```

### Use

```javascript
import squba from 'squba'
// OR
const squba = require('squba')

const foo = {
  bar: {
    arr: ['a', 'b', 'c'],
    objs: [ { name: 'Mike', address: { street: 'Lemontree st.' } } ]
  }
}

squba(foo, ['bar', 'objs', 0, 'name']) // 'Mike'
squba(foo, 'bar.objs.0.name') // 'Mike'

squba(foo, ['bar', 'objs', 0, 'address', 'street']) // 'Lemontree st.'
squba(foo, 'bar.objs.0.address.street') // 'Lemontree st.'

squba(foo, ['bar', 'arr', 4]) // undefined
squba(foo, 'bar.arr.4') // undefined

squba(foo, ['bar', 'baz']) // undefined
squba(foo, 'bar.baz') // undefined
```

### FAQ

- *Why such small module?* [Sindre](https://github.com/sindresorhus/) gives a [good answer](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328) to this.
