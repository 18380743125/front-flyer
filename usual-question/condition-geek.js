/**
 * 如何让 a === 1 && a === 2 && a === 3 成立
 */

const b = {
  n: 1,
  valueOf() {
    return this.n++;
  },
};

console.log(b == 1 && b == 2 && b == 3);
