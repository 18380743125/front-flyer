import ArrayStack from './ArrayStack';

function isValid(s: string): boolean {
  const stack = new ArrayStack<string>();
  const leftHalfBracket = ['{', '[', '('];
  const rightHalfBracket = ['}', ']', ')'];
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i);
    if (leftHalfBracket.includes(ch)) {
      stack.push(ch);
    } else if (rightHalfBracket.includes(ch)) {
      const idx = rightHalfBracket.indexOf(ch);
      if (stack.isEmpty() || stack.peek() !== leftHalfBracket[idx]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}

console.log(isValid('{}(ss)(([]))'));


export default isValid;
