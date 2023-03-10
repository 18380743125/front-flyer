/**
 * 来源：牛客网 TOP101 题号: BM82
 * 买卖股票的最好时机（三）
 * 两次交易所能获得的最大收益
 * @param prices int整型一维数组 股票每一天的价格
 * @return int整型
 */
export function maxProfit(prices: number[]): number {
  // write code here
  const n = prices.length;
  if (n === 0) return 0;
  const dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(5).fill(Number.MIN_SAFE_INTEGER);
  }
  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  // dp[i][0] 均未买入
  // dp[i][1] 买入一次
  // dp[i][2] 卖出一次
  // dp[i][3] 买入二次
  // dp[i][4] 卖出两次
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0];
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
    dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
  }
  console.log(dp);

  // 一次未买 / 卖出一次 / 卖出两次
  return Math.max(dp[n - 1][2], Math.max(0, dp[n - 1][4]));
}

console.log(maxProfit([1, 2, 8, 3, 8]));
