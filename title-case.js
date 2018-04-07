
function titleCase(str) {
  convertString = str.toLowerCase().split(" ");
  newArr = [];
  
  convertString.forEach((word) => {
    newArr.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  return newArr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));