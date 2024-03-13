// Given an Int, return it's reversed value
// For Example:
// Input 25
// O/P 52
// I/P 500
// O/P 5
// I/P -300
// O/P -3

const reverseInt = (n) =>
  parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);

// console.log(typeof reverseInt(52));
console.log(reverseInt(-500));
