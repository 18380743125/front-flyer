import root from "../data/root"
import type { TreeNode } from "../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM24
 * 中序遍历
 * @param root TreeNode类
 * @return int整型一维数组
 */
export function inorderTraversal(root: TreeNode): number[] {
  // write code here
  const result: number[] = []
  const stack: TreeNode[] = []
  let curr: TreeNode | null = root
  while (curr !== null || stack.length > 0) {
    if (curr !== null) {
      stack.push(curr)
      curr = curr.left
    } else {
      const node = stack.pop()
      node && result.push(node.val)
      if (node?.right) curr = node.right
    }
  }
  return result
}

console.log(inorderTraversal(root))
