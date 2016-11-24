function isUndef(val) {
  return typeof val === 'undefined'
}

function isString(val) {
  return typeof val === 'string'
}

function squba(obj = {}, path) {
  if (isString(path)) {
    return squba(obj, path.split('.'))
  }

  if (isUndef(obj[path[0]])) {
    return undefined
  }

  if (path.length > 1) {
    const [head, ...tail] = path
    return squba(obj[head], tail)
  }

  return obj[path[0]]
}

module.exports = squba
