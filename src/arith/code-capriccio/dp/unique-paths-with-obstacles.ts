/**
 * 不同路径Ⅱ
 * @param obstacleGrid 网格
 * @returns 路径条数
 */
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array.from(new Array(m), () => new Array(n).fill(0));
  // 初始化第一列
  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1;
  }
  // 初始化第一行
  for (let j = 0; j < n && obstacleGrid[0][j] === 0; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = obstacleGrid[i][j] === 0 ? dp[i - 1][j] + dp[i][j - 1] : 0;
    }
  }
  return dp[m - 1][n - 1];
}

const obstacleGrid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];
const result = uniquePathsWithObstacles(obstacleGrid);
console.log(result);
