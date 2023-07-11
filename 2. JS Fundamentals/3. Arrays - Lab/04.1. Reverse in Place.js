function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    swapElements(arr, i, arr.length - 1 - i);
  }

  console.log(arr.join(" "));

  function swapElements(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
reverse(["a", "b", "c", "d", "e"]);
