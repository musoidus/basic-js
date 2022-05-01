const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let currentFile;
  for (let i = 1; i < names.length; i++) {
    currentFile = names[i];
    for (let j = i - 1; j >= 0; j--) {
      if (currentFile === names[j]) {
        names[i] = names[i] + '(1)';
        break;
      } else if (currentFile === names[j].slice(0, names[j].lastIndexOf('('))) {
        let idx =
          Number(
            names[j].slice(
              names[j].lastIndexOf('(') + 1,
              names[j].lastIndexOf(')')
            )
          ) + 1;
        names[i] = names[i] + `(${idx})`;
        break;
      }
    }
  }
  return names;
}

module.exports = {
  renameFiles,
};
