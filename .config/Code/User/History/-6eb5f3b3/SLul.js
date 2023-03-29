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
  let arr2 = [];
  for (let i = 1; i < this.size(); i++) {
    arr2[i - 1] = this.arr[i];
  }
  return primerElemento;
};
Queue.prototype.size = function () {
  let count = 0;
  while (this.arr[count] != undefined) {
    count++;
  }
  return count;
};
