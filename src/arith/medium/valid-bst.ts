import root from "../data/root"
import { sroot } from "../data/root"
import type { TreeNode } from "../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM34
 * 判断是不是二叉搜索树
 * @param root TreeNode类
 * @return bool布尔型
 */
export function isValidBST(root: TreeNode): boolean {
  // write code here
  const stack: TreeNode[] = []
  let curr: TreeNode | null = root
  let pre = Number.MIN_SAFE_INTEGER
  while (curr !== null || stack.length > 0) {
    if (curr !== null) {
      stack.push(curr)
      curr = curr.left
    } else {
      const node = stack.pop()
      if (node) {
        if (node.val < pre) return false
        pre = node.val
      }
      curr = node?.right || null
    }
  }
  return true
}

console.log(isValidBST(root))
console.log(isValidBST(sroot))
