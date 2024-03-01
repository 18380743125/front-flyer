/**
 * 来源：牛客网 TOP101 题号: BM90
 * 最小覆盖子串
 * @param s
 * @param t
 */
export function minWindow(s: string, t: string): string {
  // write code here
  if (s.length < t.length) {
    return '';
  }
  const freq = new Array(128).fill(0);
  let count = s.length + 1;
  for (let i = 0; i < t.length; i++) {
    freq[t.charCodeAt(i)]--;
  }

  let slow = 0;
  let fast = 0;
  // 左右区间
  let left = -1;
  let right = -1;
  while (fast < s.length) {
    let ch = s.charCodeAt(fast);
    freq[ch]++;
    while (checkIsContain(freq)) {
      if (count > fast - slow + 1) {
        count = fast - slow + 1;
        left = slow;
        right = fast;
      }
      ch = s.charCodeAt(slow);
      freq[ch]--;
      slow++;
    }
    fast++;
  }
  if (left === -1) return '';
  else return s.slice(left, right + 1);
}

function checkIsContain(freq: number[]) {
  for (const item of freq) {
    if (item < 0) return false;
  }
  return true;
}

const result = minWindow('XDOYEZODEYXNZ', 'XYZ');
console.log(result);
