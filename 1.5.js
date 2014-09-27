var f = function(s) {
  var a = s.split('');
  if (a.length === 0) return '';

  var c = a[0];
  var count = 1;
  var r = [];
  var i = 0;
  for (i = 1; i < a.length; i++) {
    if (c === a[i]) {
      count++;
    } else {
      r.push(c);
      r.push(count);
      count = 1;
    }
    c = a[i];
  }
  r.push(c);
  r.push(count);
  return r.length < a.length ? r.join('') : s;
};

var assert = require('assert');

assert(f('') === '');
assert(f('a') === 'a');
assert(f('aa') === 'aa');
assert(f('aaa') === 'a3');
assert(f('aab') === 'aab');
assert(f('aabb') === 'aabb');
assert(f('aaabb') === 'a3b2');
assert(f('aabcccccaaa') === 'a2b1c5a3');
