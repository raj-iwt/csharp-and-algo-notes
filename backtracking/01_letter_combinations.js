/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }

  const map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let result = map[digits[0]];

  let i = 1;
  let temp = [];

  while (i < digits.length) {
    temp = result;
    result = [];
    const current = map[digits[i]];
    for (let j = 0; j < current.length; j++) {
      for (let k = 0; k < temp.length; k++) {
        result.push(temp[k] + current[j]);
      }
    }

    i++;
  }

  return result;
};

const digits = "2";

console.log(letterCombinations(digits)); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
