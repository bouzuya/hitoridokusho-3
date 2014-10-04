var Node = require('./2.0').Node;

var f = function(node) {
  node.data = node.next.data;
  node.next = node.next.next;
};

var assert = require('assert');

(function() {
  var head = new Node(1);
  head.appendToTail(2);
  head.appendToTail(3);
  head.appendToTail(4);
  head.appendToTail(5);
  assert(head.toString() === '1 -> 2 -> 3 -> 4 -> 5');
  var center = head.next.next;
  assert(center.data === 3);
  f(center);
  assert(head.toString() === '1 -> 2 -> 4 -> 5');
})();
