var Node = require('./2.0').Node;

var n2d = function(node) {
  var sum = 0;
  var d = 1;
  while (node.next !== null) {
    sum += node.data * d;
    node = node.next;
    d *= 10;
  }
  sum += node.data * d;
  return sum;
};

var d2n = function(d) {
  var node = null;
  while (d > 0) {
    if (node !== null) {
      node.appendToTail(d % 10);
    } else {
      node = new Node(d % 10);
    }
    d = Math.floor(d / 10)
  }
  return node;
};

var f = function(n1, n2) {
  var d1 = n2d(n1);
  var d2 = n2d(n2);
  return d2n(d1 + d2);
};

var assert = require('assert');

(function() {
  var n617 = new Node(7);
  n617.appendToTail(1);
  n617.appendToTail(6);
  var n295 = new Node(5);
  n295.appendToTail(9);
  n295.appendToTail(2);
  assert(n617.toString() === '7 -> 1 -> 6');
  assert(n2d(n617) === 617);
  assert(d2n(617).toString() === '7 -> 1 -> 6');
  assert(n295.toString() === '5 -> 9 -> 2');
  assert(n2d(n295) === 295);
  assert(d2n(295).toString() === '5 -> 9 -> 2');
  assert(f(n617, n295).toString() === '2 -> 1 -> 9');
})();
