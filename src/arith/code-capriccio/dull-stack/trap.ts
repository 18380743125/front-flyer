/**
 * 接雨水
 * @param height 高度
 */
function trap(height: number[]): number {
  const n = height.length;
  let result = 0;
  const dullIncreasingStack = [] as number[];
  dullIncreasingStack.push(0);
  for (let i = 1; i < n; i++) {
    let top = dullIncreasingStack.at(-1) as number;
    if (height[i] < height[top]) {
      dullIncreasingStack.push(i);
    } else if (height[i] === height[top]) {
      dullIncreasingStack.pop();
      dullIncreasingStack.push(i);
    } else {
      while (dullIncreasingStack.length > 0 && height[i] > height[top]) {
        const mid = dullIncreasingStack.pop() as number;
        if (dullIncreasingStack.length > 0) {
          top = dullIncreasingStack.at(-1) as number;
          const w = i - top - 1;
          const h = Math.min(height[i], height[top]) - height[mid];
          result += w * h;
        }
      }
      dullIncreasingStack.push(i);
    }
  }
  return result;
}

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const result = trap(height);
console.log(result);

export {};
