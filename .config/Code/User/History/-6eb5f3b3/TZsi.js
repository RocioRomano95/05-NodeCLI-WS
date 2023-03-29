function Queue() {
  this.arr = [];

  this.enqueue = function () {
    this.arr;
  };
}

Queue.prototype.enqueue = function (element) {
  this.arr[this.size()] = element;
};

Queue.prototype.dequeue = function (element) {
  let primerElemento = this.arr[0];
  for (let i = 1; i < this.size(); i++) {
    this.arr[i - 1] = this.arr[i];
  }
  return primerElemento;
};
Queue.prototype.size = function () {
  let count = 0;
  for (let prop in this.arr) {
    if (this.arr.hasOwnProperty(prop) != 0) {
      count++;
    }
  }
  return count;
};
