/**
 * 给定一个数组, 返回一个新数组,
 * 新数组每一个元素的值为其后第一个大于其的值, 若没有则 -1
 */

export function transform(arr: Array<number>) {
  const n = arr.length;
  const result: Array<number> = new Array(n).fill(-1);
  if (n === 0) return result;
  // 单调递减栈
  const stack = [0];
  for (let i = 1; i < n; i++) {
    // 栈顶
    let top = stack[stack.length - 1];
    if (arr[i] <= arr[top]) {
      stack.push(i);
    } else {
      while (stack.length > 0 && arr[i] > arr[top]) {
        if (stack.length > 0) {
          top = stack.pop() as number;
        }
        result[top] = arr[i];
      }
      stack.push(i);
    }
  }
  return result;
}

const arr = [1, 5, 8, 7, 2, 9, 2];

console.log(transform(arr));
