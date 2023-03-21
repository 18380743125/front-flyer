import { sroot } from "../data/root"
import type { TreeNode } from "../data/root"

/**
 * 来源：牛客网 TOP101 题号: BM38
 * 二叉搜索树的最近公共祖先
 * @param root TreeNode类
 * @param p int整型
 * @param q int整型
 * @return int整型
 */
export function lowestCommonAncestor(root: TreeNode, p: number, q: number): number {
  // write code here
  if (root === null) return -1
  const pPath: TreeNode[] = []
  const qPath: TreeNode[] = []
  getPath(root, p, pPath)
  flag = false
  getPath(root, q, qPath)
  let result: TreeNode | null = root
  // 节点第一个不同就是最近的公共节点
  while (pPath.length > 0 && qPath.length > 0) {
    const pNode = pPath.shift() || null
    const qNode = qPath.shift() || null
    if (pNode === qNode) result = pNode
    else break
  }
  return result ? result.val : -1
}

// 路径是否结束
let flag = false
// 拿到从根节点开始到 target 的路径
export function getPath(node: TreeNode | null, target: number, path: TreeNode[]) {
  if (flag || node === null) return
  path.push(node)
  if (node.val === target) {
    flag = true
    return
  }
  getPath(node.left, target, path)
  getPath(node.right, target, path)
  if (flag) return
  path.pop()
}

// 递归写法
export function lowestCommonAncestor2(root: TreeNode | null, p: number, q: number): number {
  if (root === null) return -1
  // 找到 p 或 q
  if (root.val === p || root.val === q) {
    return root.val
  }
  const left = lowestCommonAncestor2(root.left, p, q)
  const right = lowestCommonAncestor2(root.right, p, q)
  // 左侧没有 p 和 q
  if (left === -1) return right
  // 右侧没有 p 和 q
  if (right === -1) return left
  // 找到了最近公共祖先
  return root.val
}

console.log(lowestCommonAncestor2(sroot, 6, 12))
