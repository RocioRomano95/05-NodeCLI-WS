function swap(arr, i) {
  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
}
function inOrder(arr, i) {
  return arr[i] <= arr[i + 1];
}

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let swapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (!inOrder(arr, j) && arr[j + 1]) {
        swap(arr, j);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
