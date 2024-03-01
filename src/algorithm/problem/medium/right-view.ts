import { TreeNode } from "../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM41
 * 求二叉树的右视图
 * @param pre int整型一维数组 先序遍历
 * @param vin int整型一维数组 中序遍历
 * @return int整型一维数组
 */
export function rightView(pre: number[], vin: number[]): number[] {
  // write code here
  const root = reconstruct(pre, vin)
  if (root === null) return []
  const queue: TreeNode[] = []
  const result: number[] = []
  queue.push(root)
  while (queue.length > 0) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift() || null
      if (node && node.left) queue.push(node.left)
      if (node && node.right) queue.push(node.right)
      if (i === size - 1 && node) result.push(node.val)
    }
  }
  return result
}

// 前序中序重建二叉树
export function reconstruct(pre: number[], vin: number[]): TreeNode | null {
  if (pre.length === 0 || vin.length === 0) {
    return null
  }
  const root = new TreeNode(pre[0])
  for (let i = 0; i < vin.length; i++) {
    if (pre[0] === vin[i]) {
      root.left = reconstruct(pre.slice(1, i + 1), vin.slice(0, i))
      root.right = reconstruct(pre.slice(i + 1), vin.slice(i + 1))
      break
    }
  }
  return root
}

const pre = [1, 2, 4, 5, 3]
const vin = [4, 2, 5, 1, 3]
console.log(rightView(pre, vin))
