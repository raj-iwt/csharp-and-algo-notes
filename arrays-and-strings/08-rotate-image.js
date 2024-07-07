/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    const n = matrix.length;

    for (let i = 0; i < Math.floor((n + 1) / 2); i++) {

        for (let j = 0; j < Math.floor(n / 2);  j++) {
            const cur_i = n - 1 - i;
            const cur_j = n - 1 - j;
            const temp = matrix[cur_j][i]; // n = 5; i = 0; j = 0; 

            // 4, 0  =  4, 4
            matrix[cur_j][i] = matrix[cur_i][cur_j];
            matrix[cur_i][cur_j] = matrix[j][cur_i];
            matrix[j][cur_i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
};

matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix) // [[7,4,1],[8,5,2],[9,6,3]]