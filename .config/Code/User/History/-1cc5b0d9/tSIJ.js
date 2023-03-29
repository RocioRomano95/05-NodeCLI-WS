function BinarySearchTree(valor) {
  this.value = valor;
  this.left = null;
  this.rigth = null;
}

BinarySearchTree.prototype.insert = function (valor) {
  if (valor > this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree();
    } else {
      return this.left.insert(valor);
    }
  }
  if (valor < this.value) {
    if (this.rigth === null) {
      this.rigth = new BinarySearchTree();
    } else {
      return this.rigth.insert(valor);
    }
  }
};
BinarySearchTree.prototype.contains = function () {};
BinarySearchTree.prototype.depthFirstForEach = function () {};
BinarySearchTree.prototype.breadthFirstForEach = function () {};

BinarySearchTree.prototype.size = function () {
  let count = 1; // contando la raiz o root
  if (this.left) {
    count += this.left.size();
  }
  if (this.rigth) {
    count += this.rigth.size();
  }
  return count;
};
