import root from "../data/root"
import type { TreeNode } from "../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM24
 * 层次遍历
 * @param root
 */
export function levelOrder(root: TreeNode): number[][] {
  // write code here
  const result: number[][] = []
  if (!root) return result
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
    result.push(level)
  }
  return result
}

console.log(levelOrder(root))
