import root from "../../data/root"
import type { TreeNode } from "../../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM33
 * 二叉树的镜像
 * @param root TreeNode类
 * @return TreeNode类
 */
export function mirror(root: TreeNode): TreeNode {
  // write code here
  if (root === null) return root
  const queue: TreeNode[] = []
  queue.push(root)
  while (queue.length > 0) {
    const node = queue.shift() || null
    if (node) {
      const temp = node?.left || null
      node.left = node.right
      node.right = temp
    }
    if (node?.left) queue.push(node.left)
    if (node?.right) queue.push(node.right)
  }
  return root
}

console.log(mirror(root))
