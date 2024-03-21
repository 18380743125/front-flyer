/**
 * 来源：牛客网 TOP101 题号: BM97
 * 旋转数组
 * @param n number 数组长度
 * @param m number 右移距离
 * @param arr number[] 给定数组
 * @return 数组
 */
export function rotate(n: number, m: number, arr: number[]): number[] {
  // write code here
  m = m % n
  const postArr = arr.slice(n - m)
  const preArr = arr.slice(0, n - m)
  return postArr.concat(preArr)
}

console.log(rotate(6, 2, [1, 2, 3, 4, 5, 6]));
