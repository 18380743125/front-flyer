/**
 * 斐波那契数
 * @param n
 */
function fib(n: number): number {
  const dp = [0, 1, 1];
  if (n < 2) {
    return dp[n];
  }
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

const result = fib(4);

console.log(result);

export {};
