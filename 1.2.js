var reverse = function(s) {
  var len = s.length - 1; // strlen(s)
  var i = 0;
  var c = null;
  var w = null;
  for (i = 0; i < Math.floor(len / 2); i++) {
    w = s[i];
    s[i] = s[len - i - 1];
    s[len - i - 1] = w;
  }
  return s;
};


var assert = require('assert');

// C, C++ じゃないので、それっぽい感じで。
// C において、文字列は文字の配列。
// JavaScript に文字はないので文字列で代用。'0' を Null 文字のつもりで使う。
assert.deepEqual(
  reverse(['0']),
  ['0']
);
assert.deepEqual(
  reverse('aiueo0'.split('')),
  ['o','e','u','i','a','0']
);
