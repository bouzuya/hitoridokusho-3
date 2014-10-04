var Node = require('./2.0').Node;

var f = function(head, k) {
  var appendToHead = function(head, data) {
    var node = new Node(data);
    node.next = head;
    return node;
  };

  var r = new Node(head.data);
  var n = head;
  while (n.next !== null) {
    r = appendToHead(r, n.next.data);
    n = n.next;
  }
  r = appendToHead(r, n.data);
  for (; k > 0; k--) {
    r = r.next;
  }
  return r.data;
};

var assert = require('assert');

(function() {
  var head = new Node(1);
  assert(head.toString() === '1');
  assert(f(head, 1) === 1);
  // TODO: k > 1
})();

(function() {
  var head = new Node(1);
  head.appendToTail(2);
  assert(head.toString() === '1 -> 2');
  assert(f(head, 1) === 2);
  assert(f(head, 2) === 1);
  // TODO: k > 2
})();

(function() {
  var head = new Node(1);
  head.appendToTail(2);
  head.appendToTail(3);
  assert(head.toString() === '1 -> 2 -> 3');
  assert(f(head, 1) === 3);
  assert(f(head, 2) === 2);
  assert(f(head, 3) === 1);
  // TODO: k > 2
})();
