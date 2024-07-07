/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];

  if (matrix.length === 0) {
    return result;
  }

  let round = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;

  while (round < Math.ceil(Math.min(rows, cols) / 2)) {
    const last_col = cols - round;
    const last_row = rows - round;
    let i = round;
    let j = round;
    while (j < last_col) {
      console.log("first turn:", i, j);
      result.push(matrix[i][j]);
      j++;
    }

    j = last_col - 1;

    while (i < last_row - 1) {
      i++;
      result.push(matrix[i][j]);
      console.log("second turn:", i, j);
    }

    while (j > round && i > round) {
      j--;
      result.push(matrix[i][j]);
      console.log("third turn", i, j);
    }

    console.log("last_col", last_col);
    while (i > round + 1 && last_col - 1 > round) {
      i--;
      result.push(matrix[i][j]);
      console.log("fourth turn", i, j);
    }

    round++;
  }

  return result;
};

const matrix = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
  [11, 12, 13],
  [14, 15, 16],
];
console.log(spiralOrder(matrix)); // [1,2,3,6,9,8,7,4,5]
