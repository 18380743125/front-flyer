import root from "../data/root"
import { sroot } from "../data/root"
import type { TreeNode } from "../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM36
 * 判断是不是平衡二叉树
 * @param root TreeNode类
 * @return bool布尔型
 */
function isBalancedTree(root: TreeNode): boolean {
  // write code here
  if (root === null) return true
  return dfs(root) !== -1
}

function dfs(root: TreeNode | null): number {
  if (root === null) return 0
  const leftHeight = dfs(root.left || null)
  if (leftHeight === -1) {
    return -1
  }
  const rightHeight = dfs(root.right || null)
  if (rightHeight === -1) {
    return -1
  }
  if (Math.abs(leftHeight - rightHeight) > 1) return -1
  return Math.max(leftHeight, rightHeight) + 1
}

console.log(isBalancedTree(root))
console.log(isBalancedTree(sroot))
