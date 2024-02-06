function _compute(numStack: number[], opStack: string[]) {
  const b = numStack.pop() as number;
  let a = numStack.pop() as number;
  const op = opStack.pop() as string;
  if (op === '+') a += b;
  else if (op === '-') a -= b;
  else if (op === '*') a *= b;
  else if (op === '/') a /= b;
  numStack.push(a);
}

function _priority(op1: string, op2: string) {
  if (op1 === '(') return false;
  return !((op1 === '+' || op1 === '-') && (op2 === '*' || op2 === '/'));
}

function _isDigit(str: string) {
  return Number.isInteger(parseInt(str));
}

export function expressionCompute(str: string) {
  const numStack: number[] = [];
  const opStack: string[] = [];
  str += ')';
  opStack.push('(');
  let flag = false;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charAt(i);
    if (ch === '(') {
      opStack.push('(');
    } else if (ch === ')') {
      while (opStack[opStack.length - 1] !== '(') {
        _compute(numStack, opStack);
      }
      opStack.pop();
    } else if (flag) {
      while (_priority(opStack[opStack.length - 1], ch)) {
        _compute(numStack, opStack);
      }
      opStack.push(ch);
      flag = false;
    } else {
      // 数字
      const j = i;
      if (str.charAt(i) === '+' || str.charAt(i) === '-') i++;
      while (_isDigit(str.charAt(i))) i++;
      const temp = parseInt(str.slice(j, i));
      numStack.push(temp);
      i--;
      flag = true;
    }
  }
  return numStack.pop();
}

console.log(expressionCompute('-1*(-1-1)'));
