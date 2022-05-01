const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let numsToSort = [];
  let result = [];
  for (let num of arr) {
    if (num !== -1) numsToSort.push(num);
  }
  let idx = 0;
  numsToSort.sort((a, b) => a - b);
  for (let num of arr) {
    if (num === -1) {
      result.push(num);
    } else {
      result.push(numsToSort[idx]);
      idx++;
    }
  }
  return result;
}

module.exports = {
  sortByHeight,
};
