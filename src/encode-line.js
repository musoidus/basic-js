const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resultString = '';
  let currentLetter = str[0];
  let currentCount = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentLetter) currentCount++;
    else {
      resultString +=
        currentCount === 1 ? currentLetter : currentCount + currentLetter;
      currentCount = 1;
      currentLetter = str[i];
    }
    if (i === str.length - 1) {
      resultString +=
        currentCount === 1 ? currentLetter : currentCount + currentLetter;
    }
  }
  return resultString;
}

module.exports = {
  encodeLine,
};
