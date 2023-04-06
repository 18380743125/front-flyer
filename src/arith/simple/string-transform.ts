/**
 * 来源：牛客网 TOP101 题号: BM83
 * 字符串变形
 * @param s string
 * @param n number
 * @return string
 */
export function trans(s: string, n: number): string {
  // write code here
  const arr = s.split(" ").reverse();
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    let temp = "";
    for (let j = 0; j < item.length; j++) {
      if (/[a-z]/.test(item[j])) {
        temp += item[j].toLocaleUpperCase();
      } else {
        temp += item[j].toLocaleLowerCase();
      }
    }
    arr[i] = temp;
  }
  return arr.join(" ");
}

const result = trans("This is a sample", 16);
console.log(result);
