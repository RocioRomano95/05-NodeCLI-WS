describe("Funcion Swap", function () {
  it("toma un arreglo y un indice y swapea el elemento del indice con el siguiente ", function () {
    let arr = [1, 2, 3, 4];
    swap(arr, 2);
    expect().toSpec([1, 2, 4, 3]);
  });
});