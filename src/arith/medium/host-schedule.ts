/**
 * 来源：牛客网 TOP101 题号: BM96
 * 主持人调度（二）
 * 计算成功举办活动需要多少名主持人
 * @param n 有n个活动
 * @param startEnd startEnd[i][0]用于表示第i个活动的开始时间，startEnd[i][1]表示第i个活动的结束时间
 * @return number
 */
function minHost(n: number, startEnd: number[][]): number {
  // write code here
  const start = startEnd.map((item) => item[0]);
  const end = startEnd.map((item) => item[1]);
  start.sort((o1, o2) => o1 - o2);
  end.sort((o1, o2) => o1 - o2);
  let count = 0;
  let index = 0;
  let j = 0;
  while (index < n) {
    if (start[index] < end[j]) {
      count++;
    } else {
      j++;
    }
    index++;
  }
  return count;
}

const sample1 = [
  [1, 2],
  [2, 3],
];

const sample2 = [
  [1, 3],
  [2, 4],
];

const sample3 = [
  [2147483646, 2147483647],
  [-2147483648, -2147483647],
  [2147483646, 2147483647],
  [-2147483648, -2147483647],
  [2147483646, 2147483647],
  [-2147483648, -2147483647],
  [2147483646, 2147483647],
  [-2147483648, -2147483647],
  [2147483646, 2147483647],
  [-2147483648, -2147483647],
];

console.log(minHost(2, sample1)); // 1
console.log(minHost(2, sample2)); // 2
console.log(minHost(10, sample3)); // 5
