function repeatStringNumTimes(str, num) {
  let newString = '';
  for (let i = 0; i < num; i += 1) {
    newString += str;
  }
  return newString;
}

console.log(repeatStringNumTimes('abc', 3));