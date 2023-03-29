function LinkedList() {
  this.tail = null;
  this.head = null;
}

LinkedList.prototype.addToTail = function () {
  this.tail = new Node(element);
  this.head = tail;
};

LinkedList.prototype.addToHead = function () {};

LinkedList.prototype.removeTail = function () {};

LinkedList.prototype.removeHead = function () {};

LinkedList.prototype.search = function () {};

function Node(element) {
  this.element = element;
  this.prev = null;
  this.next = null;
}
