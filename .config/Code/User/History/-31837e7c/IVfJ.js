describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("Un arreglo desordenado, debe terminar ordenado", function () {
    expect(bubbleSort([1, 5, 7, 9, 4, 3])).toEqual([1, 3, 4, 5, 7, 9]);
  });
  it("Un arreglo inversa, debe terminar ordenado", function () {
    expect(bubbleSort([9, 7, 5, 4, 3, 1])).toEqual([1, 3, 4, 5, 7, 9]);
  });
});
