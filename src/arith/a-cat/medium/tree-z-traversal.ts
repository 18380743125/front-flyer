import root from "../../data/root"
import type { TreeNode } from "../../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM27
 * 按之字形顺序打印二叉树
 * @param root TreeNode类
 * @return int整型二维数组
 */
export function printZ(root: TreeNode): number[][] {
  // write code here
  const result: number[][] = []
  if (root === null) return result
  const queue: TreeNode[] = []
  queue.push(root)
  while (queue.length > 0) {
    const size = queue.length
    const level: number[] = []
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      node && level.push(node.val)
      if (node?.left) queue.push(node.left)
      if (node?.right) queue.push(node.right)
    }
    if (result.length % 2 === 1) level.reverse()
    result.push(level)
  }
  return result
}

console.log(printZ(root))
