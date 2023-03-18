import root from "../data/root"
import type { TreeNode } from "../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM23
 * 前序遍历
 * @param root TreeNode类
 * @return 整型一维数组
 */
export function preorderTraversal(root: TreeNode): number[] {
  // write code here
  const result: number[] = []
  if (root === null) return result
  const stack = [root]
  while (stack.length !== 0) {
    const node = stack.pop()
    node && result.push(node.val)
    if (node?.right) stack.push(node.right)
    if (node?.left) stack.push(node.left)
  }
  return result
}

console.log(preorderTraversal(root))
