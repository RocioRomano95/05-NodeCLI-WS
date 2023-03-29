function Queue() {
  this.tubo = [];
}

Queue.prototype.enqueue = function (data) {
  this.tubo[this.size()] = data;
};

Queue.prototype.dequeue = function () {
  let primero = this.tubo[0];
  let tubo2 = [];
  for (let i = 1; i < this.size(); i++) {
    tubo2[i - 1] = this.tubo[i];
  }
  this.tubo = tubo2;
  return primero;
};

Queue.prototype.size = function () {
  let count = 0;
  while (this.tubo[count] != undefined) {
    count++;
  }
  return count;
};
