// データ構造あり
var f1 = function(s) {
  var o = {};
  var i = 0;
  for (i = 0; i < s.length; i++) {
    var c = s[i];
    if (o.hasOwnProperty(c)) {
      return false;
    }
    o[c] = true;
  }
  return true;
};

// データ構造なし
// NOTE: 愚直。
var f2 = function(s) {
  var i = 0;
  var j = 0;
  for (i = 0; i < s.length; i++) {
    var c = s[i];
    for (j = i + 1; j < s.length; j++) {
      if (c === s[j]) {
        return false;
      }
    }
  }
  return true;
};

var f = f2; // f1 or f2

console.log(f('') === true);
console.log(f('a') === true);
console.log(f('ab') === true);
console.log(f('aa') === false);
console.log(f('aba') === false);
