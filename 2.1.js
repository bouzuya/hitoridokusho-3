var Node = require('./2.0').Node;

var f = function(head) {
  var pointer1 = null;
  var pointer2 = null;

  pointer1 = head;

  while (pointer1 !== null && pointer1.next !== null) {
    pointer2 = pointer1;
    while (pointer2 !== null && pointer2.next !== null) {
      if (pointer2.next.data === pointer1.data) {
        pointer2.next = pointer2.next.next;
      }
      pointer2 = pointer2.next;
    }
    pointer1 = pointer1.next;
  }

  return head;
};

var assert = require('assert');

(function() {
  var head = new Node(1);
  assert(head.toString() === '1');
  assert(f(head).toString() === '1');
})();

(function() {
  var head = new Node(1);
  head.appendToTail(2);
  assert(head.toString() === '1 -> 2');
  assert(f(head).toString() === '1 -> 2');
})();

(function() {
  var head = new Node(1);
  head.appendToTail(1); // duplication
  assert(head.toString() === '1 -> 1');
  assert(f(head).toString() === '1');
})();

(function() {
  var head = new Node(1);
  head.appendToTail(2);
  head.appendToTail(3);
  head.appendToTail(2); // duplication
  head.appendToTail(3); // duplication
  head.appendToTail(4);
  assert(head.toString() === '1 -> 2 -> 3 -> 2 -> 3 -> 4');
  assert(f(head).toString() === '1 -> 2 -> 3 -> 4');
})();
