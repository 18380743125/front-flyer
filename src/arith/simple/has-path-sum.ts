import root from "../data/root"
import type { TreeNode } from "../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM29
 * 二叉树中和为某一值的路径（一）
 * @param root TreeNode类
 * @param sum int整型
 * @return bool布尔型
 */
function hasPathSum(root: TreeNode | null, sum: number): boolean {
  // write code here
  if (root === null) return false
  sum -= root.val
  if (sum === 0 && root.left === null && root.right === null) {
    return true
  }
  const leftResult = hasPathSum(root.left, sum)
  const rightResult = hasPathSum(root.right, sum)
  return leftResult || rightResult
}

console.log(hasPathSum(root, 38)) // true
console.log(hasPathSum(root, 20)) // false
console.log(hasPathSum(null, 0)) // false
