function LinkedList() {
  this.tail = null;
  this.head = null;
}

LinkedList.prototype.addToTail = function (element) {
  if (this.tail === null) {
    let nodo1 = new Node(element);
    this.tail = nodo1;
    this.head = nodo1;
  } else {
    let newNodo = new Node(element);
    this.tail.next = newNodo;
    newNodo.prev = this.tail;

    this.tail = newNodo;
  }
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
