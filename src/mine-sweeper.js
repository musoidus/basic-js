const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let minesweeperTable = [];
  for (let i = 0; i < matrix.length; i++) {
    let minesweeperRow = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;
      //  if (matrix[i][j] === true) count++;
      if (i >= 1 && matrix[i - 1][j] === true) count++; //top
      if (j <= matrix[i].length - 2 && matrix[i][j + 1] === true) count++; //right
      if (i <= matrix.length - 2 && matrix[i + 1][j] === true) count++; //bottom
      if (j >= 1 && matrix[i][j - 1] === true) count++; //left

      //diagonal cells
      if (i >= 1 && j >= 1 && matrix[i - 1][j - 1] === true) {
        console.log('a');
        count++;
      }
      if (
        i >= 1 &&
        j <= matrix[i].length - 2 &&
        matrix[i - 1][j + 1] === true
      ) {
        console.log('b');
        count++;
      }
      if (
        i <= matrix.length - 2 &&
        j <= matrix[i].length - 2 &&
        matrix[i + 1][j + 1] === true
      ) {
        console.log('c');
        count++;
      }
      if (i <= matrix.length - 2 && j >= 1 && matrix[i + 1][j - 1] === true) {
        console.log('d');
        count++;
      }
      minesweeperRow.push(count);
    }
    minesweeperTable.push(minesweeperRow);
  }
  return minesweeperTable;
}

module.exports = {
  minesweeper,
};
