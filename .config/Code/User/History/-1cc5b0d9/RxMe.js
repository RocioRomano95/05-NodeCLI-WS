function BinarySearchTree() {
  this.left = null;
  this.rigth = null;
}

BinarySearchTree.prototype.insert = function (valor) {
  if(valor)
};
BinarySearchTree.prototype.contains = function () {};
BinarySearchTree.prototype.depthFirstForEach = function () {};
BinarySearchTree.prototype.breadthFirstForEach = function () {};

BinarySearchTree.prototype.size = function () {
  let count = 1; // contando la raiz o root
  if (this.left !== null) {
    count += this.left.size();
  }
  if (this.rigth !== null) {
    count += this.rigth.size();
  }
  return count;
};
