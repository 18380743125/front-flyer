import root from "../../data/root"
import type { TreeNode } from "../../data/root"

/*
 * 来源：牛客网 TOP101 题号: BM25
 * 后序遍历
 * @param root TreeNode类
 * @return int整型一维数组
 */
export function postorderTraversal(root: TreeNode): number[] {
  // write code here
  const result: number[] = []
  if (root === null) return result
  const stack = [root]
  let curr: TreeNode | null = null
  while (stack.length > 0) {
    curr = stack[stack.length - 1]
    if (curr.left !== null && root !== curr.left && root !== curr.right) {
      // 左孩子存在 且 上次 result.push 不是其左右孩子
      stack.push(curr.left)
    } else if (curr.right !== null && root !== curr.right) {
      // 右孩子存在 且 上次 result.push 不是其右孩子
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
