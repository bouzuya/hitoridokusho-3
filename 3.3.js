var Node = require('./3.0-node').Node;
var Stack = require('./3.0-stack').Stack;

var SetOfStacks = function() {
  this._stackMaxLength = 3;
  this._stacks = [];
};

SetOfStacks.prototype._currentStack = function() {
  if (this._stacks.length === 0) {
    return null;
  }
  return this._stacks[this._stacks.length - 1];
};

SetOfStacks.prototype.push = function(item) {
  var stack = this._currentStack();
  if (stack && stack.length() < this._stackMaxLength) {
    return stack.push(item);
  } else {
    var newStack = new Stack();
    var result = newStack.push(item);
    this._stacks.push(newStack);
    return result;
  }
};

SetOfStacks.prototype.pop = function() {
  var stack = this._currentStack();
  if (!stack) {
    throw new Error('stack is empty');
  } else if (stack.length() === 0) {
    this._stacks.pop();
    stack = this._currentStack();
  }
  return stack.pop();
};

SetOfStacks.prototype.peek = function() {
  var stack = this._currentStack();
  if (!stack) {
    throw new Error('stack is empty');
  } else if (stack.length() === 0) {
    this._stacks.pop();
    stack = this._currentStack();
  }
  return stack.peek();
};

SetOfStacks.prototype.length = function() {
  return this._stacks.reduce(function(l, s) {
    return l + s.length();
  }, 0);
};

SetOfStacks.prototype.popAt = function(index) {
  return this._stacks[index].pop();
};

var assert = require('assert');

(function() {
  var stack = new SetOfStacks();
  assert(stack.length() === 0);
  assert.throws(function() { stack.peek(); });
  assert.throws(function() { stack.pop(); });
})();

(function() {
  var stack = new SetOfStacks();
  assert(stack.push(1) === null);
  assert(stack.length() === 1);
  assert(stack.peek() === 1);
  assert(stack.length() === 1);
  assert(stack.pop() === 1);
  assert(stack.length() === 0);
})();

(function() {
  var stack = new SetOfStacks();
  assert(stack.push(1) === null);
  assert(stack.push(2) === null);
  assert(stack.push(3) === null);
  assert(stack.push(4) === null);
  assert(stack.length() === 4);
  assert(stack.peek() === 4);
  assert(stack.pop() === 4);
  assert(stack.pop() === 3);
  assert(stack.pop() === 2);
  assert(stack.pop() === 1);
})();

(function() {
  var stack = new SetOfStacks();
  assert(stack.push(1) === null);
  assert(stack.push(2) === null);
  assert(stack.push(3) === null);
  assert(stack.push(4) === null);
  assert(stack.length() === 4);
  assert(stack.peek() === 4);
  assert(stack.popAt(0) === 3);
  assert(stack.pop() === 4);
  assert(stack.pop() === 2);
  assert(stack.pop() === 1);
})();


(function() {
  var stack = new SetOfStacks();
  assert(stack.push(1) === null);
  assert(stack.push(2) === null);
  assert(stack.push(3) === null);
  assert(stack.push(4) === null);
  assert(stack.length() === 4);
  assert(stack.peek() === 4);
  assert(stack.popAt(0) === 3);
  assert(stack.popAt(0) === 2);
  assert(stack.length() === 2);
  assert(stack.pop() === 4);
  assert(stack.pop() === 1);
})();
