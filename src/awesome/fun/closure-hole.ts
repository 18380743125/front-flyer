/**
 * 闭包陷进漏洞, get 权限过大, hacker 可以通过原型间接获取私有对象 _obj 从而违规操作私有对象
 * 解决办法, 在调用 get 时判断是否是自己的属性或者将自身原型置为 null 不使用原型情况下食用)
 */

const obj = (function () {
  const _obj = {
    a: 1,
    b: 2,
  } as Record<string, any>;

  // 解决一：将原型置为 null
  // Object.setPrototypeOf(_obj, null);

  function get(key: string) {
    // 解决二：判断该属性是否是自己的
    if (!_obj.hasOwnProperty(key)) return null;
    else return _obj[key];
  }
  return {
    get,
  };
})();

// 利用原型漏洞, 从而拿到闭包中对象从而违法操作
Object.defineProperty(Object.prototype, "aa", {
  get() {
    return this;
  },
});

const aa = obj.get("aa");
console.log(aa);

// aa.a = 66;
// aa.b = 0;

console.log(obj.get("a"), obj.get("b"));
