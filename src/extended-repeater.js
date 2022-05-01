const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resultString = '';
  if (str === null) str = 'null';
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (options.addition === null) options.addition = 'null';
  else if (!options.addition && typeof options.addition !== 'boolean')
    options.addition = '';

  for (let i = 0; i < options.repeatTimes; i++) {
    resultString += str;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      let add =
        j === options.additionRepeatTimes - 1 ? '' : options.additionSeparator;
      resultString += options.addition + add;
    }
    resultString += i === options.repeatTimes - 1 ? '' : options.separator;
  }
  return resultString;
}

module.exports = {
  repeater,
};
