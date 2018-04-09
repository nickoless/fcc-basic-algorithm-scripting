function confirmEnding(str, target) {
  lastVal = str.substring((str.length - target.length), str.length);
  return (lastVal === target) ? true : false;
}

console.log(confirmEnding("Bastian", "tian"));

// Don't use .endsWith()