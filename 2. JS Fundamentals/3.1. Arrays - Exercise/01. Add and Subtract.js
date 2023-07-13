function addAndSubtract(array) {
  let modifiedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      modifiedArray[i] = array[i] + i;
    } else {
      modifiedArray[i] = array[i] - i;
    }
  }
  console.log(modifiedArray);

  let sumOriginal = 0;
  for (let i = 0; i < array.length; i++) {
    sumOriginal += Number(array[i]);
  }
  console.log(sumOriginal);

  let sumModified = 0;
  for (let i = 0; i < modifiedArray.length; i++) {
    sumModified += Number(modifiedArray[i]);
  }
  console.log(sumModified);
}

addAndSubtract([5, 15, 23, 56, 35]);
