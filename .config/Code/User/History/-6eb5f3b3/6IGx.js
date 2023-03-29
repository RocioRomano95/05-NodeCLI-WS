function Queue() {
  this.arr = [];
}

Queue.prototype.enqueue = function (element) {
  this.arr[this.arr.length] = element;
};

Queue.prototype.dequeue = function (element) {
  this.arr[0] = element;
};
