/**
 * 来源：牛客网 TOP101 题号: BM81
 * 买卖股票的最好时机（二）
 * 交易多次
 * @param prices int整型一维数组 股票每一天的价格
 * @return int整型
 */
export function maxProfit(prices: number[]): number {
  // write code here
  const n = prices.length
  if (n === 0) return 0
  const dp = new Array(n)
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(2)
  }
  // dp[i][0] 不持股
  // dp[i][1] 持股
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }
  return dp[n - 1][0]
}

console.log(maxProfit([8, 9, 2, 5, 4, 7, 1])) // 7
console.log(maxProfit([5, 4, 3, 2, 1])) // 0
console.log(maxProfit([1, 2, 3, 4, 5])) // 4
