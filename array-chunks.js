
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); 
// should return [[0, 1, 2, 3], [4, 5]].
