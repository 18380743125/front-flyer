/**
 * 来源：牛客网 TOP101 题号: BM98
 * 螺旋矩阵
 * @param matrix number[][]
 * @return number
 */
function spiralOrder(matrix: number[][]): number[] {
  // write code here
  const res: number[] = [];
  if (matrix.length === 0) return res;
  const m = matrix.length;
  const n = matrix[0].length;
  // 边界
  let left = 0;
  let right = n - 1;
  let up = 0;
  let down = m - 1;
  while (left <= right && up <= down) {
    let row = up;
    let col = left;
    // 从左到右
    while (col <= right) {
      res.push(matrix[row][col++]);
    }
    col--;
    row++;
    // 从上到下
    while (row <= down) {
      res.push(matrix[row++][col]);
    }
    row--;
    col--;
    // 处理当前只需遍历一行的情况
    if (row === up) break;
    // 从右到左
    while (col >= left) {
      res.push(matrix[row][col--]);
    }
    col++;
    row--;
    // 处理当前只需遍历一列的情况
    if (col === right) break;
    // 从下到上
    while (row > up) {
      res.push(matrix[row--][col]);
    }
    left++;
    right--;
    up++;
    down--;
  }
  return res;
}

const sample1 = spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
const sample2 = spiralOrder([[7], [9], [6]]);
const sample3 = spiralOrder([[7, 9, 6]]);
console.log(sample1);
console.log(sample2);
console.log(sample3);
