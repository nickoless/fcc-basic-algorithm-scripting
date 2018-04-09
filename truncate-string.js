
function truncateString(str, num) {
  let truncate = str.slice(0, (num - 3));

  if (num <= 3) {
    truncate = str.slice(0, num);
  }
  if (str.length > num) {
    return `${truncate}...`;
  } return str;
}

console.log(truncateString("Absolutely Longer", 2));
