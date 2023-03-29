function BinarySearchTree(valor) {
  this.value = valor;
  this.left = null;
  this.rigth = null;
}

BinarySearchTree.prototype.insert = function (valor) {
  if (valor < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(valor);
    } else {
      return this.left.insert(valor);
    }
  }
  if (valor > this.value) {
    if (!this.right) {
      //PARTE DERECHA
      this.right = new BinarySearchTree(valor);
    } else {
      return this.right.insert(valor);
    }
  }
};

BinarySearchTree.prototype.contains = function (valor) {
  if (this.value === valor) {
    return true;
  } else {
    if (valor < this.value) {
      if (valor) {
        return true;
      }
    } else {
      this.left.contains(valor);
    }
    if (valor > this.value) {
      if (valor) {
        return true;
      }
    } else {
      this.right.contains(valor);
    }
  }
};
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
