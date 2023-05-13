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

// new.target => 判断是否是 new 调用
function fun() {
  if(new.target) {
    throw new Error(fun.name + " 不能通过 new 调用")
  }
}
new fun()