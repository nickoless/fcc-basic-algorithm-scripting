function confirmEnding(str, target) {
  lastVal = str.substring((str.length - target.length), str.length);
  return (lastVal === target) ? true : false;
}

console.log(confirmEnding("Bastian", "tianx"));

// Don't use .endsWith()