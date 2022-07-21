'use strict'

const stringifyPackage = require('../lib/index')
const test = require('tap').test

const dummy = { name: 'dummy' }

test('stringify-package', function (t) {
  t.match(stringifyPackage(dummy), /\n$/m, 'with no params uses \\n')
  t.match(stringifyPackage(dummy, 2, '\n'), /\n$/m, 'uses \\n')
  t.match(stringifyPackage(dummy, 2, '\r\n'), /\r\n$/m, 'uses \\r\\n')

  t.match(stringifyPackage(dummy), /^ {2}"name": "dummy"/m, 'with no params uses 2-space indent')
  t.match(stringifyPackage(dummy, 2, '\n'), /^ {2}"name": "dummy"/m, 'uses 2-space indent')
  t.match(stringifyPackage(dummy, 4, '\n'), /^ {4}"name": "dummy"/m, 'uses 4-space indent')

  t.end()
})
