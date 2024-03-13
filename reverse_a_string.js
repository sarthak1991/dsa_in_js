//  You a given a string. write a function that returns the reverse of that string. 

//  split the string, reverse, join, return 

// const  reverseString = (str) =>  str.split('').reverse().join('');

// console.log(reverseString('Sarthak Batra')); // olleh


// Second method of reversing a string.

// const reverseString2 = (str) => {
//     let reversed = '';
//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     return reversed;
// }

// console.log(reverseString2("Subscribe to my channel"));


// Third method of reversing a string

const reverseString3 = (str) => str.split("").reduce((rev, char) => {return char+rev}, "") 

console.log(reverseString3("Hello World"));