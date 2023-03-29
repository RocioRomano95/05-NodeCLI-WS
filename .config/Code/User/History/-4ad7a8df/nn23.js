function bubbleSort(array) {}

function swap(array) {
  //1)ingresa un array
  //2)la funcion debe recorrer el array
  //3)deberia comparar el 1er y 2do num(2-3) y ordenarlo
  //4)recorre nuevamente para verificar si esta ien ordenado
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    for (let j = 0; j < array.length - (i - 1); j++) {
      console.log(array[j]);
    }
  }
}
swap(array);
