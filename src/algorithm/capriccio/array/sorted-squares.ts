/**
 * 有序数组的平方
 * @param nums 源数组
 * @return 平方后排序
 */
export function sortedSquares(nums: number[]): number[] {
  const n = nums.length;
  let index = n - 1;
  let left = 0, right = n - 1;
  const result: number[] = new Array(n);
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[index--] = nums[left] ** 2;
      left++;
    } else {
      result[index--] = nums[right] ** 2;
      right--;
    }
  }
  return result;
}
