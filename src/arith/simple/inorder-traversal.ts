import { root } from "./preorder-traversal"
import type { TreeNode } from "./preorder-traversal"

/**
 * 中序遍历
 * @param root TreeNode类
 * @return int整型一维数组
 */
export function inorderTraversal(root: TreeNode): number[] {
  // write code here
  const result = [] as number[]
  const stack = [] as TreeNode[]
  let curr = root as TreeNode | null
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
