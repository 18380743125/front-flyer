/**
 * 来源：牛客网 TOP101 题号: BM99
 * 顺时针旋转矩阵
 * 空间复杂度: O(1)
 * @param matrixs number[][]
 * @param n number
 * @return number[][]
 */
export function rotateMatrix(matrixs: number[][], n: number): number[][] {
  // write code here
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const temp = matrixs[i][j]
      matrixs[i][j] = matrixs[j][i]
      matrixs[j][i] = temp
    }
  }
  matrixs.forEach((item) => item.reverse())
  return matrixs
}

// 空间复杂度: O(n^2)
export function rotateMatrix2(matrixs: number[][], n: number): number[][] {
  // write code here
  const res = new Array(n).fill(0).map(() => new Array(n))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      res[j][n - i - 1] = matrixs[i][j]
    }
  }
  return res
}

console.log(
  rotateMatrix(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    3
  )
)
