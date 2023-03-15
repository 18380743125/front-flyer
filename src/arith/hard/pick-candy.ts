/**
 * 来源：牛客网 TOP101 题号: BM95
 * 分糖果问题
 * @param arr int整型一维数组 the array
 * @return int整型
 */
export function candy(arr: number[]): number {
  // write code here
  const helper: number[] = new Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i++) {
    // 从左到右递增则糖果至少比左边多分 1 个
    if (arr[i] > arr[i - 1]) {
      helper[i] = helper[i - 1] + 1;
    }
  }
  let result = helper[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    // 从右到左递增且左边糖果分的少则其糖果至少比其右边多分一个
    if (arr[i] > arr[i + 1] && helper[i] <= helper[i + 1]) {
      helper[i] = helper[i + 1] + 1;
    }
    result += helper[i];
  }
  return result;
}

const arr = [1, 2, 3, 5, 2, 9, 8, 5, 10];
console.log(candy(arr)); // 19
console.log(candy([10, 4, 10, 10, 4])); // 8
