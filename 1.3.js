
var sort = function(s) {
  return s.split('').sort().join('');
};

var f = function(s1, s2) {
  var sorted1 = sort(s1);
  var sorted2 = sort(s2);
  return sorted1 === sorted2;
};


// わかりやすいアルゴリズムで。
// C はともかく最近の言語なら length は保持しているはずなので、
// それで余計なソートをなくすほうが良い。
var assert = require('assert');

assert.equal(f('', ''), true);
assert.equal(f('', 'a'), false);
assert.equal(f('a', 'a'), true);
assert.equal(f('a', 'b'), false);
assert.equal(f('ab', 'ab'), true);
assert.equal(f('ab', 'ba'), true);
assert.equal(f('abc', 'cba'), true);
