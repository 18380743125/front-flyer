import root from "../data/root"
import { sroot } from "../data/root"
import { TreeNode } from "../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM32
 * 合并二叉树
 * @param r1 TreeNode类
 * @param r2 TreeNode类
 * @return TreeNode类
 */
export function mergeTrees(r1: TreeNode, r2: TreeNode): TreeNode {
  // write code here
  if (r1 === null) return r2
  if (r2 === null) return r1
  const q: TreeNode[] = []
  const q1: TreeNode[] = []
  const q2: TreeNode[] = []
  const root = new TreeNode(r1.val + r2.val)
  q.push(root)
  q1.push(r1)
  q2.push(r2)
  while (q1.length > 0 || q2.length > 0) {
    const n = q.shift() as TreeNode
    const n1 = q1.shift() || null
    const n2 = q2.shift() || null

    const left1 = n1?.left || null
    const left2 = n2?.left || null
    const right1 = n1?.right || null
    const right2 = n2?.right || null

    // 合并 left
    if (left1 !== null || left2 !== null) {
      if (left1 && left2) {
        n.left = new TreeNode(left1.val + left2.val)
        q.push(n.left)
        q1.push(left1)
        q2.push(left2)
      } else if (left1 === null) {
        n.left = left2
      } else {
        n.left = left1
      }
    }

    // 合并 right
    if (right1 !== null || right2 !== null) {
      if (right1 && right2) {
        n.right = new TreeNode(right1.val + right2.val)
        q.push(n.right)
        q1.push(right1)
        q2.push(right2)
      } else if (right1 === null) {
        n.right = right2
      } else {
        n.right = right1
      }
    }
  }
  return root
}

// 递归版本
export function mergeTree2(r1: TreeNode | null, r2: TreeNode | null): TreeNode | null {
  if (r1 === null) return r2
  if (r2 === null) return r1
  const root = new TreeNode(r1.val + r2.val)
  root.left = mergeTree2(r1.left, r2.left)
  root.right = mergeTree2(r1.right, r2.right)
  return root
}

console.log(mergeTrees(root, sroot))
console.log(mergeTree2(root, sroot))
