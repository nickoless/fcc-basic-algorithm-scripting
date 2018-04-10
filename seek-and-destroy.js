function destroyer(arr) {
  let num = []
  for (i = 1; i < arguments.length; i++) {
    num.push(arguments[i]);
  }
  arr = arr.filter((val) => {
    return num.indexOf(val) === -1;
  });
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  return num;
}

getIndexToIns([40, 60], 50);