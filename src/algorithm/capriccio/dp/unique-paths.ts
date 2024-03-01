/**
 * 不同路径Ⅰ
 * @param m 行
 * @param n 列
 * @returns 路径条数
 */
function uniquePaths(m: number, n: number): number {
  const dp = Array.from(new Array(m), () => new Array(n));
  for (let i = 0; i < m; i++) dp[i][0] = 1;
  for (let j = 0; j < n; j++) dp[0][j] = 1;
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}

const result = uniquePaths(3, 7);
console.log(result);

export {};
