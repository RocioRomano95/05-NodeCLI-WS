function swap(arr, i) {
  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
}
function inOrder(arr, i) {
  return arr[i] <= arr[i + 1];
}

function bubbleSort() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (!inOrder(arr, i) && arr[i + 1]) {
        swap(arr, i);
      }
    }
  }
}
