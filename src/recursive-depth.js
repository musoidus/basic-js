const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0;
    if (Array.isArray(arr)) {
      maxDepth += 1;
      for (let subArray of arr) {
        let currentDepth = 0;
        currentDepth += Array.isArray(subArray)
          ? 1 + this.calculateDepth(subArray)
          : 0;
        if (currentDepth > maxDepth) maxDepth = currentDepth;
      }
    }
    return maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
