'use strict';

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function isUndef(val) {
  return typeof val === 'undefined';
}

function isString(val) {
  return typeof val === 'string';
}

function squba(obj, path) {
  if (isString(path)) {
    return squba(obj, path.split('.'));
  }

  if (isUndef(obj[path[0]])) {
    return undefined;
  }

  if (path.length > 1) {
    var _path = _toArray(path),
        head = _path[0],
        tail = _path.slice(1);

    return squba(obj[head], tail);
  }

  return obj[path[0]];
}

module.exports = squba;
