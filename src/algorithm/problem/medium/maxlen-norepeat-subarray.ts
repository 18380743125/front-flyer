/**
 * 来源：牛客网 TOP101 题号: BM92
 * 最长无重复子数组
 * @param arr number
 * @return number
 */
export function maxLength(arr: number[]): number {
  // write code here
  const n = arr.length;
  if (n < 2) return n;
  const map = new Map();
  let left = 0;
  let right = 0;
  let result = 0;
  while (right < n) {
    if (map.has(arr[right])) {
      map.set(arr[right], map.get(arr[right]) + 1);
    } else {
      map.set(arr[right], 1);
    }
    while (map.get(arr[right]) > 1) {
      map.set(arr[left], map.get(arr[left++]) - 1);
    }
    result = Math.max(result, right - left + 1);
    right++;
  }
  return result;
}

const arr = [2, 2, 3, 4, 5, 4, 3];
const result = maxLength(arr);
console.log(result);
