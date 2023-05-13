// 将 10000000000 转换成 10,000,000,000
export function formatNumber(str: string) {
  const reg = /(?=\B(\d{3})+$)/g
  // return Number(str).toLocaleString()
  return str.replace(reg, ',')
}

console.log(formatNumber('10000000000'))