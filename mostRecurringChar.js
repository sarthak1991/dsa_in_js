// given a string, find out the most recurring character in that string.
// for example
// if the string is "Sarthak Batra"
// the most recurring character is "a" with 4 occurences

const mostRecurringChar = (str) => {
  let objContainer = {};
  let maxChar = "";
  let maxCount = 0;
  for (const char of str) {
    if (objContainer[char]) {
      objContainer[char]++;
    } else {
      objContainer[char] = 1;
    }

    if (objContainer[char] > maxCount) {
      maxChar = char;
      maxCount = objContainer[char];
    }
  }

  return { maxChar, maxCount };
};

const { maxChar, maxCount } = mostRecurringChar("Sarthak Batra");

console.log(
  `The most recurring character is "${maxChar}" with "${maxCount}" occurences`
);
