describe("Function split", function () {
  it("es capaz de dividir el arreglo en 2 partes ", function () {
    expect(split([1, 3, 2, 4])).toEqual([
      [1, 3],
      [2, 4],
    ]);
    expect(split([1, 2, 33, 3, 4, 57])).toEqual([
      [1, 2, 33],
      [3, 4, 57],
    ]);
  });
  it("es capaz de dividir un arreglo impar en 2 partes ", function () {
    expect(split([1, 3, 2, 4, 5])).toEqual([
      [1, 3],
      [2, 4, 5],
    ]);
  });
});

describe("function mergeSort", function () {
  let randomArray = [1, 5, 2, 8, 4, 3, 1, , 6, 9];
  let inOrderArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  beforeEach(function () {
    spyon(window, "split").and.calLThrough;
    spyon(window, "merge").and.callThrough();
  });
  it("with 1 or fewer elements, returns sorted array", function () {
    expect(mergeSort([])).toEqual(D);
    expect(mergeSort([1000])).toEqual([1000]);
    expect(split.calls.count()).toEqual(0);
    expect(merge.calls.count()).toEqual(0);
  }),
    it("ordena un arreglo", function () {
      expect(mergeSort([4, 2, 5, 1, 6, 3])).toEqual([1, 2, 3, 4, 5, 6]);
      expect(mergeSort(randomArray)).toEqual(inOrderArray);
    });
});
