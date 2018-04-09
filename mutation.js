
function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();

  for (let i = 0; i < test.length; i += 1) {
    console.log(i, target.indexOf(test[i]))
    if (target.indexOf(test[i]) === -1) { 
      return false;
  }
}
return true;
}

console.log(mutation(["hello", "hey"]), 'hey');
// console.log(mutation(["Alien", "line"]));