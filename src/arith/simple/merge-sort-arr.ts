/**
 * 来源：牛客网 TOP101 题号: BM87
 * 合并有序的数组
 * @param A number[]
 * @param m number
 * @param B number[]
 * @param n number
 * @return number[]
 */
export function merge(
  A: number[],
  m: number,
  B: number[],
  n: number
): number[] {
  // write code here
  if (n === 0) return A;
  let index = m + n - 1;
  let i = m - 1;
  let j = n - 1;
  while (index >= 0) {
    if (i >= 0 && j >= 0) {
      if (A[i] > B[j]) A[index] = A[i--];
      else A[index] = B[j--];
    } else if (i >= 0) {
      A[index] = A[i--];
    } else {
      A[index] = B[j--];
    }
    index--;
  }
  return A;
}

const result = merge([1], 1, [2], 1);
console.log(result);
