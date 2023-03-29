function Queue() {
  this.values = [];
}

Queue.prototype.size = function () {
  let i = 0;
  while (this.values[i]) {
    i++;
  }
  return i;
};

Queue.prototype.enqueue = function (valor) {
  let tail = this.size();
  this.values[tail] = valor;
};
Queue.prototype.dequeue = function () {};
