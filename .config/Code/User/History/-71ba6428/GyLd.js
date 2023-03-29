describe("Function split", function () {
  it("es capaz de dividir el arreglo en 2 partes ", function () {
    expect(split([1, 3, 2, 4])).toEqual([1, 3], [2, 4]);
    expect(split([1, 2, 33, 3, 4, 57])).toEqual([1, 2, 33], [3, 4, 57]);
  });
  it("es capaz de dividir un arreglo impar en 2 partes ", function () {
    expect(split([1, 3, 2, 4, 5])).toEqual([1, 3], [2, 4, 5]);
  });
});
