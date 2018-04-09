
function bouncer(arr) {
  const newArr = [];
  arr.forEach((value) => {
    if (value) {
      newArr.push(value);
    }
  });
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.