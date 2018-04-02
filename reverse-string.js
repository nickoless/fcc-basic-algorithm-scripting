const reverse = (string) => {
  let result = string.split("").reverse().join("")
  return result;
};

console.log(reverse('hello'));