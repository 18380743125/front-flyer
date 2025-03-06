import root from "../../data/root"
import type { TreeNode } from "../../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM31
 * 对称的二叉树
 * @param root TreeNode类
 * @return bool布尔型
 */
export function isSymmetrical(root: TreeNode): boolean {
  // write code here
  if (root === null) return true
  const queue1: Array<TreeNode | null> = []
  const queue2: Array<TreeNode | null> = []
  queue1.push(root.left)
  queue2.push(root.right)
  while (queue1.length > 0 && queue2.length > 0) {
    const node1 = queue1.shift()
    const node2 = queue2.shift()
    if (node1 === null && node2 === null) continue
    if (node1 === null || node2 === null || node1?.val !== node2?.val) return false
    queue1.push(node1?.left as TreeNode | null)
    queue1.push(node1?.right as TreeNode | null)
    queue2.push(node2?.right as TreeNode | null)
    queue2.push(node2?.left as TreeNode | null)
  }
  return true
}

console.log(isSymmetrical(root))
