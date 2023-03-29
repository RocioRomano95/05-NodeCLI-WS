function BinarySearchTree(valor) {
  this.value = valor;
  this.left = null;
  this.right = null;
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
      if (!this.left) {
        return false;
      }
    } else {
      return this.left.contains(valor);
    }
    if (valor > this.value) {
      if (!this.right) {
        return false;
      }
    } else {
      return this.right.contains(valor);
    }
  }
  return false;
};
BinarySearchTree.prototype.depthFirstForEach = function () {};
BinarySearchTree.prototype.breadthFirstForEach = function () {};

BinarySearchTree.prototype.size = function () {
  let count = 1; // contando la raiz o root
  if (this.left) {
    count += this.left.size();
  }
  if (this.right) {
    count += this.right.size();
  }
  return count;
};
