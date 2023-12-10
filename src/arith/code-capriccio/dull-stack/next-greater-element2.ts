/**
 * 下一个更大元素Ⅱ
 * @param nums
 */
function nextGreaterElements(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const dullIncreasingStack = [] as number[];
  dullIncreasingStack.push(0);
  for (let i = 1; i < 2 * n; i++) {
    let top = dullIncreasingStack.at(-1) as number;
    if (nums[i % n] <= nums[top]) {
      dullIncreasingStack.push(i % n);
    } else {
      while (dullIncreasingStack.length > 0 && nums[i % n] > nums[top]) {
        result[top] = nums[i % n];
        dullIncreasingStack.pop();
        top = dullIncreasingStack.at(-1) as number;
      }
      dullIncreasingStack.push(i % n);
    }
  }
  return result;
}

const nums = [1, 2, 3, 4, 3];
const result = nextGreaterElements(nums);
console.log(result);
