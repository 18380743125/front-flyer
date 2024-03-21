/**
 * 来源：牛客网 TOP101 题号: BM89
 * 合并区间
 * @param intervals Interval[]
 * @return Interval[]
 */
class Interval {
  start: number;
  end: number;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

export function merge(intervals: Interval[]): Interval[] {
  // write code here
  const n = intervals.length;
  if (n < 2) return intervals;
  intervals.sort((o1, o2) => o1.start - o2.start);
  const result: Interval[] = [];
  result.push(intervals[0]);
  let count = 0;
  for (let i = 1; i < n; i++) {
    const interval = intervals[i];
    const prevInterval = result[count];
    if (interval.start > prevInterval.end) {
      result.push(interval);
      count++;
    } else {
      result.pop();
      prevInterval.end = Math.max(interval.end, prevInterval.end);
      result.push(prevInterval);
    }
  }
  return result;
}

const intervals: Interval[] = [
  new Interval(0, 0),
  new Interval(1, 4),
  // new Interval(10, 30),
  // new Interval(80, 100),
  // new Interval(20, 60),
  // new Interval(150, 180),
];

const result = merge(intervals);
console.log(result);
