
function palindrome(str) {
  let string = str.replace(/\W|_/g, "").toLowerCase();
  let check = str.replace(/\W|_/g, "").toLowerCase().split("").reverse().join("");

  if (string === check) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));
