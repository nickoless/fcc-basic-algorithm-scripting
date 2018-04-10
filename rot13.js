function rot13(str) {
  newStr = '';

  for (let i = 0; i < str.length; i += 1) {
    let char = str.charCodeAt(i);

    if (char < 65 || char > 90) {
      char = char;
    } else {
      char += 13;
      if (char > 90) {
        char = (char - 90) + 64
      }
    }
    newStr += String.fromCharCode(char)
  }
  return newStr
}
// Change the inputs below to test
console.log(rot13('SERR PBQR PNZC'));
