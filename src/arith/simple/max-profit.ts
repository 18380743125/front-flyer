/*
 * 来源：牛客网 TOP101 题号: BM80
 * 买卖股票的最好时机（一）
 * 交易一次
 * @param prices int整型一维数组
 * @return int整型
 */

function maxProfit(prices: number[]): number {
  // write code here
  const n = prices.length
  if (n === 0) return 0
  let res = 0
  let min = Number.MAX_SAFE_INTEGER
  for (const price of prices) {
    min = Math.min(min, price)
    res = Math.max(res, price - min)
  }
  return res
}

console.log(maxProfit([8, 9, 2, 5, 4, 7, 1])) // 5
console.log(maxProfit([2, 4, 1])) // 2
console.log(maxProfit([3, 2, 1])) // 0
