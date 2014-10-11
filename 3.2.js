
var Node = function(options) {
  this.data = options.data;
  this.next = options.next || null;
};

var Stack = function() {
  this.head = null;
  this.minHead = null;
};

Stack.prototype.push = function(item) {
  var node = new Node({ data: item });
  if (this.head !== null) {
    node.next = this.head;
  }
  this.head = node;

  if (this.minHead !== null) {
    var peek = this.minHead.data;
    var minNode = new Node({ data: (item < peek ? item : peek) });
    minNode.next = this.minHead;
    this.minHead = minNode;
  } else {
    this.minHead = new Node({ data: item });
  }
};

Stack.prototype.pop = function() {
  if (this.head === null) {
    throw new Error('stack is empty');
  }

  var data = this.head.data;
  this.head = this.head.next;

  this.minHead = this.minHead.next;

  return data;
};

Stack.prototype.min = function() {
  if (this.head === null) {
    throw new Error('stack is empty');
  }

  return this.minHead.data;
};

var assert = require('assert');

(function() {
  var stack = new Stack();
  stack.push(1);
  assert(stack.min() === 1);
})();

(function() {
  var stack = new Stack();
  stack.push(1);
  stack.push(2);
  assert(stack.min() === 1);
})();

(function() {
  var stack = new Stack();
  stack.push(3);
  stack.push(2);
  stack.push(4);
  assert(stack.min() === 2);
})();
