const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  chainLinks: [],
  chain: '',
  getLength() {
    this.chainLinks.length;
    return this;
  },
  addLink(value) {
    if (this.chainLinks.length === 0) this.chain = '';
    this.chainLinks.push(value);
    return this;
  },
  removeLink(position) {
    if (
      position <= 0 ||
      typeof position !== 'number' ||
      position > this.chainLinks.length
    ) {
      this.chainLinks.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    this.chainLinks.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainLinks.reverse();
    return this;
  },
  finishChain() {
    for (let i = 0; i < this.chainLinks.length; i++)
      this.chain +=
        i === this.chainLinks.length - 1
          ? `( ${this.chainLinks[i]} )`
          : `( ${this.chainLinks[i]} )~~`;

    this.chainLinks.splice(0, this.chainLinks.length);
    return this.chain;
  },
};

module.exports = {
  chainMaker,
};
