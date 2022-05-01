const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

class VigenereCipheringMachine {
  constructor(type) {
    if (type === undefined) this.type = true;
    else this.type = type;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let idx = 0;
    let n = alphabet.length;
    for (let symbol of message) {
      if (!symbol.match(/[A-Z]/)) {
        result += symbol;
      } else {
        let enc = (alphabet.indexOf(symbol) + alphabet.indexOf(key[idx])) % n;
        result += alphabet[enc];
        idx++;
        if (idx === key.length) idx = 0;
      }
    }
    return this.type ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let idx = 0;
    let n = alphabet.length;
    for (let symbol of message) {
      if (!symbol.match(/[A-Z]/)) {
        result += symbol;
      } else {
        let decr =
          (alphabet.indexOf(symbol) + n - alphabet.indexOf(key[idx])) % n;

        result += alphabet[decr];
        idx++;
        if (idx === key.length) idx = 0;
      }
    }

    return this.type ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
