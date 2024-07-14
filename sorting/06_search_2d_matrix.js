/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let i = 0;
  let j = 0;
  while (j < matrix[0].length) {
    console.log(i, j, matrix[i][j]);

    if (target === matrix[i][j]) return true;
    if (target > matrix[i][j]) {
      i++;
    } else {
      j++;
      i = 0;
    }

    if (i > matrix.length - 1) {
      j++;
      i = 0;
    }
  }
  return false;
};

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
const target = 20;
console.log(searchMatrix(matrix, target));
