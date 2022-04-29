const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let years;
  if (
    !sampleActivity ||
    typeof sampleActivity !== 'string' ||
    Number(sampleActivity) <= 0 ||
    Number(sampleActivity) > MODERN_ACTIVITY ||
    isNaN(Number(sampleActivity))
  )
    return false;
  else {
    years =
      Math.log(MODERN_ACTIVITY / Number(sampleActivity)) /
      (0.693 / HALF_LIFE_PERIOD);
    return Math.ceil(years);
  }
}

module.exports = {
  dateSample,
};
