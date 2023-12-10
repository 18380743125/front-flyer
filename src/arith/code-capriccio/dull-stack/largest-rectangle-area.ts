/**
 * 柱状图中最大的矩形
 * @param heights 柱子高度数组
 */
function largestRectangleArea(heights: number[]): number {
  if (heights.length === 0) {
    return 0;
  }
  heights = [0, ...heights, 0];
  let result = 0;
  const dullDecreasingStack = [];
  dullDecreasingStack.push(0);
  for (let i = 1; i < heights.length; i++) {
    let top = dullDecreasingStack.at(-1) as number;
    if (heights[i] > heights[top]) {
      dullDecreasingStack.push(i);
    } else if (heights[i] === heights[top]) {
      dullDecreasingStack.pop();
      dullDecreasingStack.push(i);
    } else {
      while (heights[i] < heights[top]) {
        const mid = dullDecreasingStack.pop() as number;
        const left = dullDecreasingStack.at(-1) as number;
        const w = i - left - 1;
        const h = heights[mid];
        result = Math.max(result, w * h);
        top = dullDecreasingStack.at(-1) as number;
      }
      dullDecreasingStack.push(i);
    }
  }
  return result;
}

const heights = [2, 1, 5, 6, 2, 3];
const result = largestRectangleArea(heights);
console.log(result);

export {};
