/**
 * 来源：牛客网 TOP101 题号: BM84
 * 最长公共前缀
 * @param strs string[]
 * @return string
 */

export function longestCommonPrefix(strs: string[]): string {
  // write code here
  const n = strs.length;
  if (n === 0) return "";
  if (n === 1) return strs[0];
  let minLen = Number.MAX_SAFE_INTEGER;
  let pos = -1;
  strs.forEach((item) => {
    minLen = Math.min(minLen, item.length);
  });
  for (let i = 0; i < minLen; i++) {
    let flag = false;
    const str = strs[0];
    for (let j = 1; j < n; j++) {
      if (str.charAt(i) !== strs[j][i]) {
        flag = true;
        break;
      }
    }
    if (flag) {
      break;
    }
    pos = i;
  }
  return strs[0].slice(0, pos + 1);
}

const strs = ["abca", "abc", "abca", "abc", "abcc"];
const result = longestCommonPrefix(strs);
console.log(result);
console.log(longestCommonPrefix(["a", "b"]));
