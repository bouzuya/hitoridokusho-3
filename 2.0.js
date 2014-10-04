var Node = function(d) {
  this.next = null;
  this.data = d;
};

Node.prototype.appendToTail = function(d) {
  var end = new Node(d);
  var n = this;
  while (n.next !== null) {
    n = n.next;
  }
  n.next = end;
};

Node.prototype.toString = function() {
  var data = [];
  var n = this;
  while (n.next !== null) {
    data.push(n.data);
    n = n.next;
  }
  data.push(n.data);
  return data.join(' -> ');
}

module.exports.Node = Node;
