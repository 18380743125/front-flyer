import { sroot } from "../data/root"
import type { TreeNode } from "../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM30
 * 二叉搜索树与双向链表
 * @param root TreeNode类
 * @return TreeNode类
 */
export function convert(root: TreeNode): TreeNode {
  // write code here
  if (root === null) return root
  const stack: TreeNode[] = []
  let curr: TreeNode | null = root
  // 前一个节点
  let pre: TreeNode | null = null
  // 链表头节点
  let result: TreeNode | null = null
  while (curr !== null || stack.length > 0) {
    if (curr !== null) {
      stack.push(curr)
      curr = curr.left
    } else {
      const node = stack.pop()
      // 构造前驱后继
      if (pre && node) {
        pre.right = node
        node.left = pre
      }
      if (node) pre = node
      // 中序第一个节点
      if (node && !result) result = node
      curr = node?.right as TreeNode | null
    }
  }
  return result as TreeNode
}

console.log(convert(sroot))
