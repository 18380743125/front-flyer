import { a } from "../data/node";

/**
 * 来源：牛客网 TOP101 题号: BM86
 * 大数加法
 * @param s string
 * @param t string
 * @return string
 */
export function solve(s: string, t: string): string {
  // write code here
  const result = [];
  const arr = s.split("").reverse();
  const brr = t.split("").reverse();
  let index = 0;
  let extra = 0;
  while (index < arr.length || index < brr.length) {
    const a = index < arr.length ? parseInt(arr[index]) : 0;
    const b = index < brr.length ? parseInt(brr[index]) : 0;
    const sum = a + b + extra;
    extra = Math.floor(sum / 10);
    result.push(sum % 10);
    index++;
  }
  if (extra > 0) result.push(extra);
  return result.reverse().join("");
}

const result = solve("123", "10");
console.log(result);
