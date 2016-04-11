#!/usr/bin/env node
'use strict';
const path = require('path')
const fs = require('fs')
const meow = require('meow')
const Lisp = require('brandly-lisp')

const cli = meow([
  'Usage',
  '  $ brandly-lisp <file>',
  '',
  'Examples',
  '  $ brandly-lisp factorial.lisp'
].join('\n'))

if (cli.input.length) {
  const filename = path.resolve('./', cli.input[0])
  fs.readFile(filename, (err, data) => {
    if (err) {
      console.log('Error reading file', cli.input[0], err)
    } else {
      var lisp = new Lisp()
      lisp.exec(data.toString())
    }
  })
} else {
  // TODO: run the REPL
  console.log('$ brandly-lisp --help')
}
