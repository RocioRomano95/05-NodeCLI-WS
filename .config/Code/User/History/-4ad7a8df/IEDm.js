function bubbleSort(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (swap(array[i], array[i + 1]) === true) {
      newArr.push(array[i]);
    }
    newArr.push(array[i + 1]);
  }
  return newArr;
}

function swap(n1, n2) {
  if (n1 < n2) return true;
  return false;
}

//1)ingresa un array
//2)la funcion debe recorrer el array
//3)deberia comparar el 1er y 2do num(2-3) y ordenarlo
//4)recorre nuevamente para verificar si esta ien ordenado
