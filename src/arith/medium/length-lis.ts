/**
 * 来源：力扣 300 最长递增子序列
 * 动态规划
 * @param nums
 * @return number
 */
function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;
  const dp = new Array(n + 1);
  dp[0] = 1;
  let res = 1;
  for (let i = 1; i < n; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    res = Math.max(res, dp[i]);
  }
  return res;
}

/**
 * 贪心 + 二分查找
 * @param nums
 * @return number
 */
function lengthOfLIS2(nums: number[]): number {
  const n = nums.length;
  if (n === 0) return 0;
  const helper = new Array(n + 1);
  let length = 1;
  helper[length] = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] > helper[length]) {
      helper[++length] = nums[i];
    } else {
      let pos = 0;
      let l = 1;
      let r = length;
      while (l <= r) {
        const mid = (l + r) >>> 1;
        if (nums[i] > helper[mid]) {
          pos = mid;
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
      helper[pos + 1] = nums[i];
    }
  }
  return length;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4
console.log(lengthOfLIS2([10, 9, 2, 5, 3, 7, 101, 18])); // 4
