var Node = require('./2.0').Node;

var f = function(node, d) {
  var getTail = function(node) {
    while (node.next !== null) {
      node = node.next;
    }
    return node;
  };

  var l = null;
  var e = null;
  var h = null;
  var n = node;
  while (n.next !== null) {
    var next = n.next;
    if (n.data > d) {
      n.next = (h !== null ? h : null);
      h = n;
    } else if (n.data === d) {
      n.next = (e !== null ? e : null);
      e = n;
    } else {
      // if (n.data < d)
      n.next = (l !== null ? l : null);
      l = n;
    }
    n = next;
  }
  if (n.data > d) {
    n.next = (h !== null ? h : null);
    h = n;
  } else if (n.data === d) {
    n.next = (e !== null ? e : null);
    e = n;
  } else {
    // if (n.data < d)
    n.next = (l !== null ? l : null);
    l = n;
  }

  var a = [l, e, h].filter(function(i) { return i; });
  for (var i = 0; i < a.length; i++) {
    getTail(a[i]).next = a[i + 1] ? a[i + 1] : null;
  }
  return a[0];
};

var assert = require('assert');

(function() {
  var head = new Node(1);
  assert(head.toString() === '1');
  assert(f(head, 3).toString() === '1');
})();

(function() {
  var head = new Node(1);
  head.appendToTail(3);
  assert(head.toString() === '1 -> 3');
  assert(f(head, 3).toString() === '1 -> 3');
})();

(function() {
  var head = new Node(3);
  head.appendToTail(1);
  assert(head.toString() === '3 -> 1');
  assert(f(head, 3).toString() === '1 -> 3');
})();

(function() {
  var head = new Node(5);
  head.appendToTail(3);
  assert(head.toString() === '5 -> 3');
  assert(f(head, 3).toString() === '3 -> 5');
})();

(function() {
  var head = new Node(3);
  head.appendToTail(1);
  head.appendToTail(5);
  assert(head.toString() === '3 -> 1 -> 5');
  assert(f(head, 3).toString() === '1 -> 3 -> 5');
})();

(function() {
  var head = new Node(5);
  head.appendToTail(4);
  head.appendToTail(3);
  head.appendToTail(2);
  head.appendToTail(1);
  assert(head.toString() === '5 -> 4 -> 3 -> 2 -> 1');
  assert(f(head, 3).toString() === '1 -> 2 -> 3 -> 4 -> 5');
})();

(function() {
  var head = new Node(5);
  head.appendToTail(4);
  head.appendToTail(2);
  head.appendToTail(1);
  assert(head.toString() === '5 -> 4 -> 2 -> 1');
  assert(f(head, 3).toString() === '1 -> 2 -> 4 -> 5');
})();
