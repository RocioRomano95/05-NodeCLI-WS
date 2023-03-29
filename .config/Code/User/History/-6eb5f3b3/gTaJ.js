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
