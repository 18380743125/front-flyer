/**
 * 每日温度
 * @param temperatures 温度列表
 * @returns 下一个更高温度是几天后
 */
function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const dullIncreasingStack = [] as number[];
  dullIncreasingStack.push(0);
  for (let i = 1; i < n; i++) {
    let top = dullIncreasingStack.at(-1) as number;
    if (temperatures[i] <= temperatures[top]) {
      dullIncreasingStack.push(i);
    } else {
      while (dullIncreasingStack.length > 0 && temperatures[i] > temperatures[top]) {
        result[top] = i - top;
        dullIncreasingStack.pop();
        top = dullIncreasingStack.at(-1) as number;
      }
      dullIncreasingStack.push(i);
    }
  }
  return result;
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
const result = dailyTemperatures(temperatures);
console.log(result);

export {};
