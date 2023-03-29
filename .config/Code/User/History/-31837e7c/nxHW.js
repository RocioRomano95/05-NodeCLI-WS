describe("Bubble Sort", function () {
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
});
