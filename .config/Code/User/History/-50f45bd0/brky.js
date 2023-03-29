function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.addToHead = function (value) {
  let node = new Node(value);
  if (!this.tail) {
    this.tail = node;
    this.head = node;
  } else {
    this.head.previous = node;
    node.next = this.head;
    this.head = node;
  }
};

LinkedList.prototype.addToTail = function (value) {
  let node = new Node(value);
  if (!this.tail) {
    this.tail = node;
    this.head = node;
  } else {
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }
};

LinkedList.prototype.removeHead = function () {
  if (!this.head) return;
  let value = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.previous = null;
  } else {
    this.tail = null;
  }
  return value;
};

LinkedList.prototype.removeTail = function () {
  if (!this.head) return;
  let value = this.tail.value;
  this.tail = this.tail.previous;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  return value;
};

LinkedList.prototype.search = function (value) {
  let node = this.head;
  let found = null;
  while (node && found == null) {
    if (typeof value === "string") {
      if (node.value === value) {
        found = node.value;
      }
    } else {
      if (value(node.value)) found = node.value;
    }
    node = node.next;
  }
  return found;
};

function Node(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
}
