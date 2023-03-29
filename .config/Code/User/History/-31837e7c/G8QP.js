/*describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("Un arreglo desordenado, debe terminar ordenado", function () {
    expect(bubbleSort([1, 5, 7, 9, 4, 3])).toEqual([1, 3, 4, 5, 7, 9]);
  });
  it("Un arreglo a la inversa, debe terminar ordenado", function () {
    expect(bubbleSort([9, 7, 5, 4, 3, 1])).toEqual([1, 3, 4, 5, 7, 9]);
  });
  it("cuantas veces fue llamada swap", function () {
    spyOn(window, "swap").and.callThrough();
    // callThrough le dice al spy que utilice el método original chocolate['masticar'],
    // mientras que `callFake` haría una copia.
    bubbleSort([3, 1, 4, 5]);
    expect(window.swap.calls.count()).toEqual(1);
  });
});*/
describe("Funcion Swap", function () {
  it("toma un arreglo y un indice y swapea el elemento del indice con el siguiente ", function () {
    let arr = [1, 2, 3, 4];
    swap(arr, 2);
    expect(arr).toEqual([1, 2, 4, 3]);
  });
  it("cuantas veces fue llamada swap", function () {
    spyOn(window, "swap").and.callThrough();
    // callThrough le dice al spy que utilice el método original chocolate['masticar'],
    // mientras que `callFake` haría una copia.
    bubbleSort([3, 1, 4, 5]);
    expect(window.swap.calls.count()).toEqual(1);
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
  it("que ordene el array pasado por parametro", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
