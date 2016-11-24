import test from 'ava'

const squba = require('../dist/squba')

const foo = {
  bar: {
    arr: ['a', 'b', 'c'],
    objs: [
      {
        name: 'Mike',
        address: {
          street: 'Lemontree st.'
        }
      }
    ]
  }
}

test('access a nested property by passing the path as array', t => {
  let actual = squba(foo, ['bar', 'arr', 2])
  t.is(actual, 'c')

  actual = squba(foo, ['bar', 'objs', 0, 'name'])
  t.is(actual, 'Mike')

  actual = squba(foo, ['bar', 'objs', 0, 'address', 'street'])
  t.is(actual, 'Lemontree st.')
})

test('access a nested property by passing the path as string', t => {
  let actual = squba(foo, 'bar.arr.2')
  t.is(actual, 'c')

  actual = squba(foo, 'bar.objs.0.name')
  t.is(actual, 'Mike')

  actual = squba(foo, 'bar.objs.0.address.street')
  t.is(actual, 'Lemontree st.')
})

test('return undefined when the property is somehow not accessible', t => {
  let actual = squba(foo, ['bar', 'arr', 4])
  t.is(actual, undefined)

  actual = squba(foo, ['bar', 'baz'])
  t.is(actual, undefined)
})

test('returns undefined when the object is undefined', t => {
  let actual = squba(undefined, 'bar')
  t.is(actual, undefined)

  actual = squba(undefined, ['bar'])
  t.is(actual, undefined)
})
