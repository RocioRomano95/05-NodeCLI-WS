function swap(arr, i) {
  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
}
function inOrder(arr, i) {
  return arr[i] <= arr[i + 1];
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (!inOrder(arr, j) && arr[j + 1]) {
        swap(arr, j);
      }
    }
  }
  return arr;
}
