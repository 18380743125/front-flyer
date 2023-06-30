/**
 * 二分查找 - [left, right]
 * @param nums 查找范围
 * @param target 目标值
 * @return 目标值索引
 */
export function search1(nums: number[], target: number): number {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    const mid = left + ((right - left) >>> 1);
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

/**
 * 二分查找 - [left, right)
 * @param nums 查找范围
 * @param target 目标值
 * @return 目标值索引
 */
export function search2(nums: number[], target: number): number {
  const n = nums.length;
  let left = 0;
  let right = n;
  while (left < right) {
    const mid = left + ((right - left) >>> 1);
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}



