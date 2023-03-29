function split(arr) {
  let mitadDelArr = Math.floor(arr.length / 2);
  let primeraMitad = arr.slice(0, mitadDelArr);
  let segundaMitad = arr.slice(mitadDelArr);

  return [primeraMitad, segundaMitad];
}
function merge(arr1, arr2) {
  let newMerge = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length || index2 < arr2.length) {
    if (arr1[index1] < arr2[index2] || !arr2[index2]) {
      newMerge.push(arr1[index1]);
      index1++;
    } else {
      newMerge.push(arr2[index2]);
      index2++;
    }
  }
}
