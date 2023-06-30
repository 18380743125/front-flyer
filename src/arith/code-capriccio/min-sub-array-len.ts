/**
 * 长度最小的子数组
 * @param target 目标值
 * @param nums 数组
 */
export function minSubArrayLen(target: number, nums: number[]): number {
  const n = nums.length;
  let slow = 0, fast = 0;
  let sum = 0;
  let result = Number.MAX_SAFE_INTEGER;
  while (fast < n) {
    sum += nums[fast++];
    while (sum >= target) {
      result = Math.min(result, fast - slow);
      sum -= nums[slow++];
    }
  }
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
}
