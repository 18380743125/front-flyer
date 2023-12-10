/**
 * 字符串匹配 KMP
 * @param S 字符串
 * @param P 查找的串
 */
export function strStr(S: string, P: string) {
  const next = _getNext(P);
  let j = 0;
  for (let i = 0; i < S.length; i++) {
    while (j > 0 && S.charAt(i) !== P.charAt(j)) {
      j = next[j - 1];
    }
    if (S.charAt(i) === P.charAt(j)) j++;
    if (j === P.length) return i - j + 1;
  }
  return -1;
}

function _getNext(P: string) {
  const n = P.length;
  const next: number[] = new Array(n).fill(0);
  let j = 0;
  for (let i = 1; i < n; i++) {
    while (j > 0 && P.charAt(j) !== P.charAt(i)) {
      j = next[j - 1];
    }
    if (P.charAt(i) === P.charAt(j)) j++;
    next[i] = j;
  }
  return next;
}

console.log(strStr('sadbutsad', 'sad'));
