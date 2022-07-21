'use strict'

const stringifyPackage = require('../lib/index')
const test = require('tap').test

const dummy = { name: 'dummy' }

test('stringify-package', function (t) {
  t.equal(stringifyPackage(dummy, 0).split(/\r\n|\r|\n/).length, 2, '0 works')
  t.end()
})
