var Node = require('./2.0').Node;

var f = function(node) {
  var head = node;
  var i = 0;
  var j = 0;
  var count = 0;
  var n1 = node;
  var n2 = null;
  while (n1.next !== null) {
    n2 = head;
    count = 0;
    for (j = 0; j < i; j++) {
      if (n2.next === n1) {
        count += 1;
      }
      n2 = n2.next;
    }
    if (count > 1) {
      return n1;
    }
    n1 = n1.next;
    i += 1;
  }
  return null;
};

var assert = require('assert');

(function() {
  var n1 = new Node(1);
  var n2 = new Node(2);
  var n3 = new Node(3);
  var n4 = new Node(4);
  var n5 = new Node(5);
  n1.next = n2;
  n2.next = n3;
  n3.next = n4;
  n4.next = n5;
  n5.next = n3;
  assert(f(n1) === n3);
})();
