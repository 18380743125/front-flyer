export function hasChanged(x: unknown, y: unknown) {
  if (x === y) {
    return x === 0 && 1 / x !== 1 / (y as number)
  } else {
    return x === x || y === y
  }
}

console.log(hasChanged(NaN, NaN))
console.log(hasChanged(0, -0))
console.log(hasChanged(1, 1))
console.log(hasChanged({}, {}))