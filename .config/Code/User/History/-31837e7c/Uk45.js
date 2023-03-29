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
});
