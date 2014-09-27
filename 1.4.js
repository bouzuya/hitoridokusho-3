
var f = function(s) {
  return s.replace(new RegExp(' ', 'g'), '%20');
};

var assert = require('assert');

assert(f('') === '');
assert(f('a') === 'a');
assert(f(' ') === '%20');
assert(f('a ') === 'a%20');
assert(f(' a') === '%20a');
assert(f(' a ') === '%20a%20');
