/**
 * 下一个更大元素Ⅰ
 * @param nums1
 * @param nums2
 */
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const n = nums1.length;
  const m = nums2.length;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(nums1[i], i);
  }
  const result = new Array(n).fill(-1);
  const dullIncreasingStack = [] as number[];
  dullIncreasingStack.push(0);
  for (let j = 1; j < m; j++) {
    let top = dullIncreasingStack.at(-1) as number;
    if (nums2[j] <= nums2[top]) {
      dullIncreasingStack.push(j);
    } else {
      while (dullIncreasingStack.length > 0 && nums2[j] > nums2[top]) {
        if (map.has(nums2[top])) {
          result[map.get(nums2[top])] = nums2[j];
        }
        dullIncreasingStack.pop();
        top = dullIncreasingStack.at(-1) as number;
      }
      dullIncreasingStack.push(j);
    }
  }
  return result;
}

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
const result = nextGreaterElement(nums1, nums2);
console.log(result);

export {};
