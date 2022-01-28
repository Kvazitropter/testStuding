import capitalize from '../src/capitalize.js';
import { strict as assert } from 'assert';

assert.strictEqual(capitalize('hi'), 'Hi');
assert.strictEqual(capitalize(''), '');

console.log('All tests passed!');
