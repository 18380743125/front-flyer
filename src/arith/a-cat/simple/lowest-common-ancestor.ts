import { sroot } from "../../data/root"
import type { TreeNode } from "../../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM37
 * 二叉搜索树的最近公共祖先
 * @param root TreeNode类
 * @param p int整型
 * @param q int整型
 * @return int整型
 */
export function lowestCommonAncestor(root: TreeNode, p: number, q: number): number {
  // write code here
  if (root === null) return -1
  const pPath = getPath(root, p)
  const qPath = getPath(root, q)
  let curr: TreeNode | null = root
  while (pPath.length > 0 && qPath.length > 0) {
    const pNode = pPath.shift() || null
    const qNode = qPath.shift() || null
    if (pNode === qNode) curr = pNode
    else break
  }
  return curr?.val || -1
}

//获取路径
export function getPath(root: TreeNode | null, target: number): TreeNode[] {
  const path: Array<TreeNode> = []
  path.push(root as TreeNode)
  while (root !== null) {
    if (target < root.val) {
      root = root.left
    } else {
      root = root.right
    }
    path.push(root as TreeNode)
    if (root?.val === target) {
      break
    }
  }
  return path
}

// 递归版本
export function lowestCommonAncestor2(root: TreeNode | null, p: number, q: number): number {
  if (root === null) return -1
  if ((root.val >= p && root.val <= q) || (root.val <= p && root.val >= q)) {
    return root.val
  } else if (root.val > p && root.val > q) {
    return lowestCommonAncestor2(root.left, p, q)
  } else {
    return lowestCommonAncestor2(root.right, p, q)
  }
}

console.log(lowestCommonAncestor2(sroot, 12, 6))
