'use strict';

const nurse = require('..');
const assert = require('assert').strict;

assert.strictEqual(nurse(), 'Hello from nurse');
console.info('nurse tests passed');
