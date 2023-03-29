describe("Funcion Swap", function () {
  it("toma un arreglo y un indice y swapea el elemento del indice con el siguiente ", function () {
    let arr = [1, 2, 3, 4];
    swap(arr, 2);
    expect(arr).toEqual([1, 2, 4, 3]);
  });
});

describe("Function inOrder", function () {
  it("toma un arreglo y un indice nos devuelve TRUE si los numeros estan ordenados", () => {
    expect(inOrder([1, 2, 3, 4], 2)).toEqual(true);
  });

  it("toma un arreglo y un indice nos devuelve FALSE si los numeros estan desordenados", () => {
    expect(inOrder([1, 2, 4, 3], 2)).toEqual(false);
  });
  it("toma un arreglo y un indice nos devuelve TRUE si los numeros son iguales", () => {
    expect(inOrder([1, 2, 4, 4], 2)).toEqual(true);
  });
});

describe("funcion bubbleSort", function () {
  it("que tenga un arreglo vacio", () => {
    expect(bubbleSort([])).toEqual([]);
  });
  it("que ordene el array pasado por parametro", function () {
    expect(bubbleSort([2, 5, 3, 8, 9, 1])).toEqual([1, 2, 3, 5, 8, 9]);
  });
});
