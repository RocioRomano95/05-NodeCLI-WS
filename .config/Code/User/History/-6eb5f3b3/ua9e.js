function Queue() {
  this.arr = [];
}

Queue.prototype.enqueue = function (element) {
  this.arr[this.arr.length] = element;
};

Queue.prototype.dequeue = function (element) {
  let primerElemento = this.arr[0];
  for (let i = 1; i < this.tubo.length; i++) {
    this.arr[i - 1] = this.arr[i];
  }
  return primerElemento;
};

Queue.prototype.size = function () {
  return this.arr.length;
};
