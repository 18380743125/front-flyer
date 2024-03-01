export function* walk(version: string) {
  let part = ''
  const symbols = ['.', '-']
  for (let i = 0; i < version.length; i++) {
    if (symbols.includes(version[i])) {
      yield part
      part = ''
    } else {
      part += version[i]
    }
  }

  return part
}

/**
 * 比较 v1 与 v2 谁的版本更大
 * v1 > v2 1
 * v1 < v2 -1
 * 相等 0
 * @param v1
 * @param v2
 * @return number
 */
export function compare(v1: string, v2: string): number {
  const iter1 = walk(v1)
  const iter2 = walk(v2)
  for (let part1 of iter1) {
    const num1 = +part1
    const num2 = +iter2.next().value;
    if(num1 > num2) return 1
    else if(num1 < num2) return -1;
  }
  return v1.localeCompare(v2)
}

console.log(compare('1.2.3-alpha', '1.2.3-beta'))