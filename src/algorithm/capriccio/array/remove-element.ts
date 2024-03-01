/**
 * 移除元素
 * @param nums 源数组
 * @param val 移除元素
 * @return 移除后的长度
 */
export function removeElement(nums: number[], val: number): number {
  const n = nums.length;
  let slow = 0;
  let fast = 0;
  while (fast < n) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }
  return slow;
}
