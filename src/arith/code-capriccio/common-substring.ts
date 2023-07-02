const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let str = '';
rl.on('line', function(line: string) {
  str += line + '\n';
  if (str.split('\n').length > 2) rl.close();
});

rl.on('close', function() {
  const arr = str.split('\n');
  const s1 = arr[0];
  const s2 = arr[1];
  let result = 0;
  for (let i = 0; i < s1.length; i++) {
    let j = 0;
    while (j < s2.length) {
      let p1 = i;
      let p2 = j;
      let start = j;
      while (p1 < s1.length && p2 < s2.length && s1.charAt(p1) === s2.charAt(p2)) {
        p1++;
        p2++;
      }
      result = Math.max(result, p2 - start);
      j++;
    }
  }
  console.log(result);
});

// 动态规划
rl.on('close', function() {
  const arr = str.split('\n');
  const s1 = arr[0];
  const s2 = arr[1];
  const n1 = s1.length,
    n2 = s2.length;
  let result = 0;
  const dp: number[][] = Array.from(new Array(n1 + 1), () =>
    new Array(n2 + 1).fill(0)
  );
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      result = Math.max(result, dp[i][j]);
    }
  }
  console.log(result);
});

export {};
