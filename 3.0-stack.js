var Node = require('./3.0-node').Node;

var Stack = function() {
  this._head = null;
  this._count = 0;
};

Stack.prototype.push = function(item) {
  this._head = new Node({ data: item, next: this._head });
  this._count += 1;
  return null;
};

Stack.prototype.pop = function() {
  if (this._head === null) {
    throw new Error('stack is empty');
  }

  var data = this._head.getData();
  this._head = this._head.getNext();
  this._count -= 1;
  return data;
};

Stack.prototype.peek = function() {
  if (this._head === null) {
    throw new Error('stack is empty');
  }

  return this._head.getData();
};

Stack.prototype.length = function() {
  return this._count;
};

module.exports.Stack = Stack;

var assert = require('assert');

(function() {
  var stack = new Stack();
  assert(stack.length() === 0);
  assert.throws(function() { stack.peek(); });
  assert.throws(function() { stack.pop(); });
})();

(function() {
  var stack = new Stack();
  assert(stack.push(1) === null);
  assert(stack.length() === 1);
  assert(stack.peek() === 1);
  assert(stack.length() === 1);
  assert(stack.pop() === 1);
  assert(stack.length() === 0);
})();

(function() {
  var stack = new Stack();
  assert(stack.push(1) === null);
  assert(stack.push(2) === null);
  assert(stack.length() === 2);
  assert(stack.peek() === 2);
  assert(stack.length() === 2);
  assert(stack.pop() === 2);
  assert(stack.length() === 1);
  assert(stack.pop() === 1);
  assert(stack.length() === 0);
})();

(function() {
  var stack = new Stack();
  assert(stack.push(1) === null);
  assert(stack.push(2) === null);
  assert(stack.length() === 2);
  assert(stack.peek() === 2);
  assert(stack.length() === 2);
  assert(stack.pop() === 2);
  assert(stack.length() === 1);
  assert(stack.push(3) === null);
  assert(stack.peek() === 3);
  assert(stack.length() === 2);
  assert(stack.pop() === 3);
  assert(stack.peek() === 1);
  assert(stack.length() === 1);
  assert(stack.pop() === 1);
  assert(stack.length() === 0);
})();
