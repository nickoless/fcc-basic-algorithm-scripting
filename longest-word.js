
function findLongestWord(str) {
  let wordArr = str.split(" ");
  largest = 0;

  wordArr.forEach((word)=> {
    if (word.length > largest) {
      largest = word.length;
    }
  });
  return largest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
