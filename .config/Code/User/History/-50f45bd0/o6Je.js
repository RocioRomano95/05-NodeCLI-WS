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

LinkedList.prototype.addToHead = function (element) {
  let newNodo = new Node(element);
  if (this.head === null) {
    this.tail = newNodo;
    this.head = newNodo;
  } else {
    this.head.previous = newNodo;
    newNodo.next = this.head;
    this.head = newNodo;
  }
};

LinkedList.prototype.removeTail = function () {};

LinkedList.prototype.removeHead = function (element) {};

LinkedList.prototype.search = function () {};

function Node(element) {
  this.value = element;
  this.previous = null;
  this.next = null;
}
