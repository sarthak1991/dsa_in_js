// given string if it is equal to reversed string, return true, ortherwise false

const plaindrome = (str) => {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed === str;
};

console.log(plaindrome("otto"));
