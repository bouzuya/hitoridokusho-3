var Node = require('./2.0').Node;

var reverse = function(node) {
  var appendToHead = function(head, data) {
    var node = new Node(data);
    node.next = head;
    return node;
  };

  var r = new Node(node.data);
  var n = node;
  while (n.next !== null) {
    r = appendToHead(r, n.next.data);
    n = n.next;
  }
  return r;
};

var f = function(node) {
  var r = reverse(node);

  var n = node;
  while (n.next !== null) {
    if (r.data !== n.data) {
      return false;
    }
    n = n.next;
    r = r.next;
  }
  if (r.data !== n.data) {
    return false;
  }
  return true;
};

var assert = require('assert');

// reverse
(function() {
  var n1 = new Node(1);
  n1.appendToTail(2);
  n1.appendToTail(3);
  assert(n1.toString() === '1 -> 2 -> 3');
  assert(reverse(n1).toString() === '3 -> 2 -> 1');
})();

(function() {
  var n1 = new Node(1);
  assert(f(n1) === true);
})();

(function() {
  var n1 = new Node(1);
  n1.appendToTail(2);
  assert(f(n1) === false);
})();

(function() {
  var n1 = new Node(1);
  n1.appendToTail(2);
  n1.appendToTail(1);
  assert(f(n1) === true);
})();

(function() {
  var n1 = new Node(1);
  n1.appendToTail(2);
  n1.appendToTail(3);
  n1.appendToTail(1);
  assert(f(n1) === false);
})();


(function() {
  var n1 = new Node(1);
  n1.appendToTail(2);
  n1.appendToTail(3);
  n1.appendToTail(2);
  n1.appendToTail(1);
  assert(f(n1) === true);
})();
