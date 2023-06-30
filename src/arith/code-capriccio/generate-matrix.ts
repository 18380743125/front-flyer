/**
 * 螺旋矩阵Ⅱ
 * @param n 生成 n x n 的矩阵
 */
export function generateMatrix(n: number): number[][] {
  const result: number[][] = Array.from(new Array(n), () => new Array(n).fill(0));
  let count = 1, loop = 0;
  let x = 0, y = 0;
  while (loop < Math.floor(n / 2)) {
    // 上行
    while (y < n - loop - 1) {
      result[x][y++] = count++;
    }
    // 右列
    while (x < n - loop - 1) {
      result[x++][y] = count++;
    }
    // 下行
    while (y > loop) {
      result[x][y--] = count++;
    }
    // 左列
    while (x > loop) {
      result[x--][y] = count++;
    }
    loop++;
    x = loop;
    y = loop;
  }
  if (n % 2 === 1) {
    while (y < n - loop) result[x][y++] = count++;
  }
  return result;
}
