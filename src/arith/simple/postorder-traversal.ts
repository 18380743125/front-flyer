import { root } from "./preorder-traversal"
import type { TreeNode } from "./preorder-traversal"

/*
 * 后序遍历
 * @param root TreeNode类
 * @return int整型一维数组
 */
export function postorderTraversal(root: TreeNode): number[] {
  // write code here
  const result = [] as number[]
  if (root === null) return result
  const stack = [root]
  let curr = null
  while (stack.length > 0) {
    const curr = stack[stack.length - 1]
    if (curr.left !== null && root !== curr.left && root !== curr.right) {
      stack.push(curr.left)
    } else if (curr.right !== null && root !== curr.right) {
      stack.push(curr.right)
    } else {
      const node = stack.pop()
      node && result.push(node.val)
      root = node as TreeNode
    }
  }
  return result
}

console.log(postorderTraversal(root))
