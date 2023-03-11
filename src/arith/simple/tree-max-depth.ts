import root from "../data/root"
import type { TreeNode } from "../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM28
 * 二叉树的最大深度
 * @param root TreeNode类
 * @return int整型
 */
function maxDepth(root: TreeNode | null): number {
  // write code here
  if (root === null) return 0
  const leftHeight = maxDepth(root.left)
  const rightHeight = maxDepth(root.right)
  return Math.max(leftHeight, rightHeight) + 1
}

console.log(maxDepth(root))
