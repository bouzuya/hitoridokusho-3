var Node = function(options) {
  this._data = options.data;
  this._next = options.next || null;
};

Node.prototype.getData = function() {
  return this._data;
};

Node.prototype.getNext = function() {
  return this._next;
};

module.exports.Node = Node;

var assert = require('assert');

(function() {
  var node = new Node({ data: 1 });
  assert(node.getData() === 1);
  assert(node.getNext() === null);
})();

(function() {
  var node1 = new Node({ data: 1 });
  var node2 = new Node({ data: 2, next: node1 });
  assert(node1.getData() === 1);
  assert(node1.getNext() === null);
  assert(node2.getData() === 2);
  assert(node2.getNext() === node1);
})();
