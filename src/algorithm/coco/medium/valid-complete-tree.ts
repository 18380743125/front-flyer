import root from "../data/root"
import { sroot } from "../data/root"
import type { TreeNode } from "../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM35
 * 判断是不是完全二叉树
 * @param root TreeNode类
 * @return bool布尔型
 */
export function isCompleteTree(root: TreeNode): boolean {
  // write code here
  if (root === null) return true
  const stack: Array<TreeNode | null> = []
  stack.push(root)
  let flag = true
  while (stack.length > 0) {
    const node = stack.shift() || null
    if (node === null) {
      flag = false
      continue
    }
    if (!flag) return false
    stack.push(node.left)
    stack.push(node.right)
  }
  return true
}

console.log(isCompleteTree(root))
console.log(isCompleteTree(sroot))
