function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (swap(array[i], array[i + 1]) === true) {
      array[i] = array[i + 1];
    }
  }
  return array;
}

function swap(n1, n2) {
  let primerIndex = array[0];
  let segundoIndex = array[1];
  if (n1 < n2) return true;
  return false;
}

//1)ingresa un array
//2)la funcion debe recorrer el array
//3)deberia comparar el 1er y 2do num(2-3) y ordenarlo
//4)recorre nuevamente para verificar si esta ien ordenado
